require 'open-uri'

class Publication < ApplicationRecord

	attr_accessor :absolute_pdf_storage_url, :absolute_pdf_download_url, :absolute_pdf_download_url_link
	has_many :ratings, dependent: :destroy

	validates :doi, uniqueness: true, allow_nil: true, format: {with: /\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?!["&\'<>])\S)+)\b/}
	validates :doi, uniqueness: true, allow_nil: true, format: {with: /\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?!["&\'<>])[[:graph:]])+)\b/}
	validates :pdf_url, presence: true, uniqueness: true, format: {with: URI.regexp}, if: Proc.new {|publication| publication.pdf_url.present?}

	def is_rated(user)
		logger.info "Starting to look for ratings given by user #{user.id}"
		self.ratings.each do |rating|
			if rating.user == user
				logger.info "Rating given by user #{user.id} found"
				return rating
			end
		end
		nil
	end

	def fetch(request_data)

		data = build_data(request_data)

		# FETCHING OF PDF FILE STARTS HERE

		logger.info "Fetching file from: #{pdf_url}"
		publication = open(pdf_url)
		if publication.meta['content-disposition'] != nil
			logger.info "Content disposition meta tag detected. Reading file name from there"
			filename = publication.meta['content-disposition'].match(/filename=(\"?)(.+)\1/)[2]
		else
			logger.info "Content disposition meta tag not detected. Reading file name from url"
			filename = pdf_url.to_s.split('/')[-1]
		end
		if filename == nil
			raise "Filename is still null, something went wrong"
		end
		load_pdf_paths(filename, data[:host])
		logger.info "File name: #{filename}"
		FileUtils::mkdir_p absolute_pdf_storage_path
		bytes_expected = publication.meta['content-length'].to_i
		bytes_copied = IO.copy_stream(publication, absolute_pdf_download_path)
		if bytes_expected != bytes_copied
			raise "Expected #{bytes_expected} bytes but got #{bytes_copied}"
		end
		logger.info "Bytes copied: #{bytes_copied} expected: #{bytes_expected} difference: #{bytes_expected - bytes_copied}"

		# METADATA READING STARTS HERE

		logger.info "Reading metadata from: #{absolute_pdf_download_path}"
		reader = PDF::Reader.new(absolute_pdf_download_path)
		begin
			if !reader.info[:doi].blank?
				logger.info "DOI found"
				update_attribute(:doi, reader.info[:doi].chomp("doi:"))
			else
				update_attribute(:doi, nil)
			end
		rescue ArgumentError => e
			logger.info "Error reading doi metadata"
			logger.info e.message
		end
		begin
			if !reader.info[:Title].blank?
				logger.info "Title found"
				update_attribute(:title, reader.info[:Title])
			else
				update_attribute(:title, nil)
			end
		rescue ArgumentError => e
			logger.info "Error reading Title metadata"
			logger.info e.message
		end
		begin
			if !reader.info[:Subject].blank?
				logger.info "Subject found"
				update_attribute(:subject, reader.info[:Subject])
			else
				update_attribute(:subject, nil)
			end
		rescue ArgumentError => e
			logger.info "Error reading Subject metadata"
			logger.info e.message
		end
		begin
			if !reader.info[:Author].blank?
				logger.info "Author found"
				update_attribute(:author, reader.info[:Author])
			else
				update_attribute(:author, nil)
			end
		rescue ArgumentError => e
			logger.info "Error reading Author metadata"
			logger.info e.message
		end
		begin
			if !reader.info[:Creator].blank?
				logger.info "Creator found"
				update_attribute(:creator, reader.info[:Creator])
			else
				update_attribute(:creator, nil)
			end
		rescue ArgumentError => e
			logger.info "Error reading Creator metadata"
			logger.info e.message
		end
		begin
			if !reader.info[:Producer].blank?
				logger.info "Producer found"
				update_attribute(:producer, reader.info[:Producer])
			else
				update_attribute(:producer, nil)
			end
		rescue ArgumentError => e
			logger.info "Error reading Producer metadata"
			logger.info e.message
		end

		# EDITING OF PDF FILE WITH PDFxREADERSOURCING STARTS HERE
		#
		logger.info "Checking again existence of: #{absolute_pdf_download_path}"
		if File.exist?(absolute_pdf_download_path)
			logger.info "File exists"
			logger.info "PDFxReadersourcing execution started"
			logger.info "Path: #{APP_CONFIG['pdf_x_readersourcing_path']}"
			logger.info "with options:"
			logger.info "-pIn: #{absolute_pdf_download_path}"
			logger.info "-pOut: #{absolute_pdf_storage_path}"
			logger.info "-u: #{data[:url]}"
			logger.info "-c: Click here"
			logger.info "-pId: #{data[:pubId]}"
			logger.info "-a: #{data[:authToken]}"
			logger.info "Complete command:"
			logger.info "java -jar #{APP_CONFIG['pdf_x_readersourcing_path']} -pIn #{absolute_pdf_download_path} -pOut #{absolute_pdf_storage_path} -u #{data[:url]} -c \"Click here\""
			output = %x( java -jar #{APP_CONFIG['pdf_x_readersourcing_path']} -pIn #{absolute_pdf_download_path} -pOut #{absolute_pdf_storage_path} -u #{data[:url]} -c "Click here")
			logger.info output
			logger.info "PDFxReadersourcing execution completed"
			File.delete(absolute_pdf_download_path)
			logger.info "Modified file"
			logger.info "Name: #{pdf_name_link}"
			logger.info "Download path: #{pdf_download_path_link}"
		else
			raise "File does not exists at #{absolute_pdf_download_path}"
		end
	end

	def remove_files
		logger.info "Deleting folder at: #{absolute_pdf_storage_path}"
		FileUtils.rm_rf(absolute_pdf_storage_path)
	end

	def other_users(current_user)
		other_users = Set.new
		self.ratings.each do |rating|
			other_user = rating.user
			if other_user != current_user
				other_users.add other_user
			end
		end
		other_users
	end

	def ratings_history
		Rating.where(publication_id: self.id).order(created_at: :asc).all
	end

	private

	def load_pdf_paths(pdf_name, host)
		pdf_name_without_ext = pdf_name.chomp(".pdf").to_s.gsub('%2', '-')
		pdf_name = "#{pdf_name_without_ext}.pdf"
		update_attribute(:pdf_storage_path, "publication/#{id}/")
		update_attribute(:pdf_download_path, "#{pdf_storage_path}#{pdf_name}")
		update_attribute(:pdf_download_url, "#{host}#{pdf_storage_path}#{pdf_name}")
		update_attribute(:pdf_name, pdf_name)
		update_attribute(:pdf_download_path_link, "#{pdf_storage_path}#{pdf_name_without_ext}#{APP_CONFIG['pdf_x_readersourcing_link_suffix']}.pdf")
		update_attribute(:pdf_download_url_link, "#{host}#{pdf_storage_path}#{pdf_name_without_ext}#{APP_CONFIG['pdf_x_readersourcing_link_suffix']}.pdf")
		update_attribute(:pdf_name_link, "#{pdf_name_without_ext}#{APP_CONFIG['pdf_x_readersourcing_link_suffix']}.pdf")
	end

	def absolute_pdf_storage_path
		Rails.public_path.join(pdf_storage_path)
	end

	def absolute_pdf_download_path
		Rails.public_path.join(pdf_download_path)
	end

	def absolute_pdf_download_path_link
		Rails.public_path.join(pdf_download_path_link)
	end

	def build_data(request_data)
		data = Hash.new
		data[:authToken] = request_data.values[0]
		data[:host] = request_data.values[1]
		data[:pubId] = self.id
		data[:url] = Rails.application.routes.url_helpers.rate_path(data[:pubId], data[:authToken])
		data
	end

end



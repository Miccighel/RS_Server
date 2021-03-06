class CreatePublications < ActiveRecord::Migration[5.2]
	def change
		create_table :publications do |t|
			t.string :doi
			t.string :title
			t.string :subject
			t.string :author
			t.string :creator
			t.string :producer
			t.string :pdf_url
			t.string :pdf_storage_path
			t.string :pdf_name
			t.string :pdf_download_path
			t.string :pdf_name_link
			t.string :pdf_download_path_link
			t.decimal :steadiness, default: 0.0
			t.decimal :score_rsm, default: 0.0
			t.decimal :score_trm, default: 0.0
			t.timestamps
		end
	end
end

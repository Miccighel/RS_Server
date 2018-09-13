json.extract! publication,
			  :id,
			  :doi,
			  :title,
			  :subject,
			  :author,
			  :creator,
			  :producer,
			  :pdf_url,
			  :pdf_storage_url,
			  :pdf_name,
			  :pdf_download_url,
			  :pdf_name_link,
			  :pdf_download_url_link,
			  :steadiness,
			  :score_sm,
			  :score_tr,
			  :created_at,
			  :updated_at
json.url publication_url(publication, format: :json)
json.extract! rating, :id, :score, :goodness, :informativeness, :accuracy_loss, :bonus, :created_at, :updated_at
json.url rating_url(rating, format: :json)

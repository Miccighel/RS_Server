Rails.application.routes.draw do

	root to: 'application#home'

	scope format: true, constraints: {format: :json} do
		resources :publications do
			collection do
				get :random
				post :lookup
				post :is_fetchable
				post :fetch
				post :extract
			end
			member do
				get :refresh
				get :is_rated
				get :is_saved_for_later
			end
		end
		resources :ratings, except: [:destroy] do
			collection do
				get :rate
			end
		end
		resources :users do
			collection do
				post :info
			end
		end
	end

	get 'unauthorized', to: 'application#unauthorized', as: :unauthorized, constraints: {:format => 'json'}
	get 'resources', to: 'application#resources', as: :resources, constraints: {:format => 'html'}
	get 'software', to: 'application#software', as: :software, constraints: {:format => 'html'}
	get 'privacy', to: 'application#privacy', as: :privacy, constraints: {:format => 'html'}
	get 'contact', to: 'application#contact', as: :contact, constraints: {:format => 'html'}
	post 'message', to: 'application#message', as: :ask, constraints: {:format => 'json'}

	get 'login', to: 'authentication#login', as: :login, constraints: {:format => 'html'}
	post 'logout', to: 'authentication#logout', as: :logout, constraints: {:format => :json}
	get 'logout', to: 'authentication#logout', constraints: {:format => :html}
	post 'authenticate', to: 'authentication#authenticate', as: :authenticate, constraints: {:format => :json}

	get 'publications/list/', to: 'publications#list', as: :publications_list, constraints: {:format => 'html'}

	get 'readers/list/', to: 'users#list', as: :users_list, constraints: {:format => 'html'}
	get 'profile/edit/', to: 'users#edit', as: :profile, constraints: {:format => 'html'}
	get 'confirm/:id/:confirmToken', to: 'users#confirm_email', as: :confirm, constraints: {:format => 'html'}
	get 'unsubscribe/:id', to: 'users#unsubscribe', as: :unsubscribe, constraints: {:format => 'html'}
	get 'sign_up', to: 'users#sign_up', as: :sign_up, constraints: {:format => 'html'}

	post 'load', to: 'ratings#load', as: :load, constraints: {:format => 'html'}
	get 'rate/:pubId/:authToken/', to: 'ratings#rate_paper', as: :rate_paper, constraints: {:format => 'html'}
	get 'rate/', to: 'ratings#rate_web', as: :rate_web, constraints: {:format => 'html'}

	get 'password/edit/', to: 'passwords#edit', as: :edit, constraints: {:format => 'html'}
	post 'password/update', to: 'passwords#update', constraints: {:format => /(html|json)/}
	get 'password/forgot', to: 'passwords#forgot', as: :forgot, constraints: {:format => /(html|json)/}
	post 'password/forgot', to: 'passwords#forgot', constraints: {:format => /(html|json)/}
	get 'password/reset', to: 'passwords#reset', as: :reset, constraints: {:format => /(html|json)/}

end

Rails.application.routes.draw do
  
  # resources :steps
  # resources :routines
  # resources :products
  # resources :users
  get '/me', to: 'users#me'

  post '/signup', to: 'users#signup'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
   
  get '/me', to: 'users#me'
  get '/users/:id/followers', to: 'follows#my_followers'
  get '/users/:id/following', to: 'follows#my_following'
  get '/discover-routines', to: 'routines#discover'

  resources :follows, only: [:create]
  resources :favorites, only: [:create]

  resources :users, only: [:show, :index] do
    resources :products, only: [:index, :show, :create, :update, :destroy]
    resources :routines, only: [:index, :show, :create, :destroy] do
      resources :steps, only: [:index, :create]
    end
  end

  post '/signup', to: 'users#signup'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

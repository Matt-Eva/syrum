Rails.application.routes.draw do
  
  # resources :follows
  # resources :steps, only: [:create]
  # resources :routines
  # resources :products, only: [:index, :show]
  # resources :users
  
  get '/me', to: 'users#me'
  get '/users/:id/followers', to: 'follows#my_followers'
  get '/users/:id/following', to: 'follows#my_following'
  # get '/routine-steps', to: 'routines#routine_steps'

  # post '/new-step', to: 'steps#new_step'

  resources :users, only: [:show] do
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

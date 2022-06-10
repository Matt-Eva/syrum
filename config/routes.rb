Rails.application.routes.draw do
  
  # resources :follows
  # resources :steps, only: [:create]
  # resources :routines
  # resources :products, only: [:index, :show]
  # resources :users
  
  get '/me', to: 'users#me'
  get '/my-followers', to: 'users#my_followers'
  get '/my-following', to: 'users#my_following'
  # get '/routine-steps', to: 'routines#routine_steps'

  # post '/new-step', to: 'steps#new_step'

  resources :users do
    resources :products, only: [:index, :show, :create, :destroy]
    resources :routines, only: [:index, :show, :create] do
      resources :steps, only: [:index, :create]
    end
  end


  post '/signup', to: 'users#signup'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

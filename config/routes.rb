Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :create ] do
      resources :projects, only: [ :index, :create ]
    end
    resource :session, only: [ :create, :destroy ]
  end
  get '/api/users/:user_id/projects/limited', to: 'api/projects#limited'
  get '/api/users/:user_id/projects/:search', to: 'api/projects#search'

end

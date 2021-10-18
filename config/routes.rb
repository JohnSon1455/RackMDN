Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: 'users/registrations', omniauth_callbacks: 'users/omniauth_callbacks'}
  get "/", to: "notes#index"
  get "/users/collections", to: "users/collections#index"
  get "/users/profiles/:id", to: "users/profiles#public_note", as: 'user_public_note'
  get "/users/profiles/:id/liked", to: "users/profiles#like_note", as: 'user_like_note_liked'
  get "/users/profiles/:id/private", to: "users/profiles#private_note", as: 'user_private_note_private'
  
  
  resources :notes do
    member do
      get :is_public
    end
    resources :comments, shallow: true, only: [:create, :destroy]
  end
  
  namespace :api do
    namespace :v1 do
      resources :notes, only: [] do
        member do
          post :collection
          post :favorite
          post :tag
        end
        collection do
          post :tag_filter
        end
      end
      resources :comments, only: [] do
        member do
          post :edit_comment
        end
      end
    end
  end

end

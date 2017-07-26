Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :destroy, :update, :show, :index]
    resources :comments, only: [:create, :destroy, :index, :show]
    get 'song/:id/comments', to: 'comments#song_comments'
    get 'user/:id/songs', to: 'songs#user_songs'
  end

end

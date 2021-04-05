Rails.application.routes.draw do
  devise_for :users
  root to: "plans#index"
  resources :achievements, only: [:create, :destroy]
  resources :runs, only: :create
  resources :plans do
    collection do
      get 'basic'
      get 'normal'
      get 'hard'
    end
  end
end

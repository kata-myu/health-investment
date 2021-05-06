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
      get 'chart'
      get 'point'
      get 'decrease_point'
      get 'push'
      get 'day_plan'
    end
  end
  resources :users, only: :show
  resources :groups, only: [:index, :new, :create, :show] do
    collection do
      get 'search-group'
    end
    member do 
      post 'join-group'
      delete 'leave-group'
    end
    resources :messages, only: [:create, :destroy] do
      collection do
        get 'reload', defaults:{ format:'json' }
      end
    end
  end
end

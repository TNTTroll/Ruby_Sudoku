Rails.application.routes.draw do
  get 'base/bord'
  devise_for :users
  get 'static_pages/landing_page'
  get 'main/menu'
  get 'main/profile'
  get 'main/skin'
  get 'main/statistic'
  get 'game/sudoku'
  root 'static_pages#landing_page'
end

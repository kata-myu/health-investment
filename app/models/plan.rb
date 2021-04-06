class Plan < ApplicationRecord
  has_one :achievement
  belongs_to :user
end

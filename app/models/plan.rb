class Plan < ApplicationRecord
  has_one :achievement
  belongs_to :user

  with_options presence: true do
    validates :plan
    validates :date
  end
end

# validates :plan, format: { with: (?:\p{Hiragana}|\p{Katakana}|[ー－]|[一-龠々])+}
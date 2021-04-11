FactoryBot.define do
  factory :plan do
    plan {'ランニング20分'}
    date {Date.today}
    association :user
  end
end

FactoryBot.define do
  factory :user do
    nickname {'田中'}
    email {'test@gmail.com'}
    password {'test1234'}
    password_confirmation {'test1234'}
  end
end

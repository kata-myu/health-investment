FactoryBot.define do
  factory :user do
    nickname {'田中'}
    goal {'運動習慣を確立します！'}
    registration_date {Date.today}
    email {'test@gmail.com'}
    password {'test1234'}
    password_confirmation {'test1234'}
  end
end

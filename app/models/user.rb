class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :nickname, presence: true, length: { maximum: 20 }
  validates :password, format: { with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,100}+\z/i, message: "は半角英数字を含む６文字以上"}

  has_many :group_users, dependent: :destroy
  has_many :groups, through: :group_users
  has_many :achievements
  has_many :runs
  has_many :plans
  has_one_attached :image
  has_one :point
  has_many :messages
  
end

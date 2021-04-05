# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|encrypted_password|string|null: false|
|email|string|null: false, unique: true|
|nickname|string|null: false, unique: true|
### Association
- has_many :plans
- has_many :achievements
- has_one :point
- has_many :runs


## plansテーブル
|Column|Type|Options|
|------|----|-------|
|plan|string|null: false|
|date|date|null: false|
|user|references|foreign_key: true|
### Association
- belongs_to :user
- has_one :achievement


## achievementsテーブル
|Column|Type|Options|
|------|----|-------|
|plan|references|foreign_key: true|
|user|references|foreign_key: true|
### Association
- belongs_to :plan
- belongs_to :user


## runsテーブル
|Column|Type|Options|
|------|----|-------|
|run|boolean|null: false|
|user|references|foreign_key: true|
### Association
- belongs_to :user
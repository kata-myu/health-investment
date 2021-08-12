# README

## アプリケーション名
HealthInvestment

## アプリケーション概要
運動の習慣化を支援するためのアプリです。
カレンダーに運動の計画（プラン）を立てることができます。カレンダーは今日の日付から１ヶ月分が表示されます。プランの登録は１日最大６つまでです。
運動のメニューを考えるのが面倒な場合は、ワンクリックで用意されたメニューを反映させることもできます。その日に予定している運動プランがすべて実行されていない場合は通知を受けることができるので、うっかり忘れてしまったということを防止できます。

毎月５のつく日に、運動プランの達成数や継続日数によってポイントが付与されます。ポイントが高いほど運動習慣が確立されているといえます。ポイントの積み上げを楽しんでください。「継続日数」は、計画した運動プランをすべて実行した日を何日連続させたかを示します。（最近一週間の達成状況の変化はグラフで確認することができます。）

グループをつくることができます。グループをつくって仲間といっしょに運動の習慣化をめざします。
グループは自分でつくることができます。また、誰かのつくったグループに参加することもできます。（任意でグループから抜けることもできます。）
グループ内でメッセージ投稿ができます。お互いに励まし合ったり、自分の成果をつぶやいたりします。


## URL
・・・
## テスト用アカウント
・・・
## 利用方法
・ユーザー登録する。（登録済みの場合は、ログインする。）

・ページ上部のフォームで日付を選択して運動プランを入力し、「プランを保存」を押すと予定を立てることができます。（１日最大６つまでプランを保存することができます。）
・「用意されたプランで登録」にマウスを合わせると、「Basicメニューで登録」「Normalメニューで登録」「Hardメニューで登録」が表示されるのでクリックするとその日から１週間分のメニューが自動で登録されます。
・その日の運動プランの左側にはチェックボックスが表示されているので、実行したらチェックボックスにチェックをいれてください。
・運動プランを削除したい場合は、該当の運動プランにカーソルを合わせて「削除」を押すと削除できます。

・サイドバーのアイコン画像をクリックするとユーザー詳細ページに遷移します。
・ユーザー詳細ページの「ユーザー情報編集」ボタンから編集ページに遷移しユーザー情報を編集できます。
・ユーザー詳細ページの「グループ作成」をクリックするとグループの作成画面に遷移します。グループ作成画面で、グループ名を入力し、グループを作成できます。

・サイドバーに現在のポイントが表示されています。ポイントを高められるように日々の計画を実行していきます。

・サイドバーの「最近の達成状況」をクリックすると運動プランの総達成回数（総実行数）の直近１周間の変化をグラフで確認することができます。

・サイドバーの「所属グループ」をクリックすると、所属グループの一覧ページに遷移します。
・所属グループの一覧からグループ名をクリックすると、そのグループのメンバーの今日の計画と達成状況を確認できます。
・画面右側でそのグループ内でのチャットをすることができます。
・「このグループをぬける」をクリックすると該当のグループからぬけることができます。
・「グループをさがす」ボタンを押すとグループ一覧ページに遷移します。こちらのページから自分が入りたいグループを選択し、グループに入ることができます。画面上部の検索バーでグループを検索することができます。


## 目指した課題解決
運動の習慣化です。
生活に運動をとりいれたいと思っているけれどなかなか実行に移せない人、運動を習慣にしたいと思っている人などを支援します。



## 実装した機能のGIF

[![Image from Gyazo](https://i.gyazo.com/cb57ec95ba5400d0c6e1c053f16f6e14.png)](https://gyazo.com/cb57ec95ba5400d0c6e1c053f16f6e14)
#### 運動プランを保存
[![Image from Gyazo](https://i.gyazo.com/585292269fbaa874507d1f687d4d3814.gif)](https://gyazo.com/585292269fbaa874507d1f687d4d3814)

#### 1週間分の計画を簡単入力
[![Image from Gyazo](https://i.gyazo.com/a4b70f6f8f1039953868257ba7924b78.gif)](https://gyazo.com/a4b70f6f8f1039953868257ba7924b78)

#### 実行したプランのチェック
[![Image from Gyazo](https://i.gyazo.com/77a933d0c731bc1db5603a74a1c25952.gif)](https://gyazo.com/77a933d0c731bc1db5603a74a1c25952)

#### プランの削除
[![Image from Gyazo](https://i.gyazo.com/bf704fd0167bebeb11dc91cd52ebc3ec.gif)](https://gyazo.com/bf704fd0167bebeb11dc91cd52ebc3ec)

#### 総達成数の確認
[![Image from Gyazo](https://i.gyazo.com/3564be23e04d44395e00d16bca20fd59.gif)](https://gyazo.com/3564be23e04d44395e00d16bca20fd59)


## 実装予定の機能
・・・

## データベース設計

### usersテーブル
|Column|Type|Options|
|------|----|-------|
|encrypted_password|string|null: false|
|email|string|null: false, unique: true|
|nickname|string|null: false, unique: true|
|goal|string|null: false|
|registration_date|date|null: false|
#### Association
- has_many :plans
- has_many :achievements
- has_many :runs
- has_one :point
- has_many :messages


### plansテーブル
|Column|Type|Options|
|------|----|-------|
|plan|string|null: false|
|date|date|null: false|
|user|references|foreign_key: true|
#### Association
- belongs_to :user
- has_one :achievement


### achievementsテーブル
|Column|Type|Options|
|------|----|-------|
|plan|references|foreign_key: true|
|user|references|foreign_key: true|
#### Association
- belongs_to :plan
- belongs_to :user


### runsテーブル
|Column|Type|Options|
|------|----|-------|
|run|boolean|null: false|
|user|references|foreign_key: true|
#### Association
- belongs_to :user


### pointsテーブル
|Column|Type|Options|
|------|----|-------|
|point|integer|null: false|
|user|references|null: false, foreign_key: true|
#### Association
- belongs_to :user


### groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|promotion|string|null: false|
#### Association
- has_many :group_users
- has_many :users, through: :group_users
- has_many :messages


### group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|
#### Association
- berongs_to :group
- belongs_to :user


### messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|string|null: false|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
#### Association
- berongs_to :user
- berongs_to :group


## 開発環境
- ruby2.6.5
- rails6.0.0



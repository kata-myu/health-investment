require 'rails_helper'

RSpec.describe "Users", type: :system do
  before do
   @user = FactoryBot.build(:user)
  end

  describe "新規ユーザー登録" do 

    context "ユーザー登録できるとき" do

      it "正しい情報を入力すれば、ユーザー登録ができ、トップページに遷移する。" do
        # トップページに遷移する
        visit root_path
        # 新規登録のボタンがある
        expect(page).to have_content("新規登録")
        # 新規登録画面に遷移する
        visit new_user_registration_path
        # 必要事項を入力する
        fill_in 'user_email', with: @user.email
        fill_in 'user_password', with: @user.password
        fill_in 'user_password_confirmation', with: @user.password_confirmation
        fill_in 'user_nickname', with: @user.nickname
        # 登録ボタンを押すとユーザーモデルのカウントが１上がる
        expect{find('input[name="commit"]').click}.to change {User.count}.by(1)
        # トップページに遷移する
        expect(current_path).to eq(root_path)
        # ページにはログアウトボタンが有る
        expect(page).to have_content("ログアウト")
        expect(page).to have_no_content("ログイン")
      end

    end
  
    context "ユーザー登録できないとき" do
      it "正しい情報を入力しないと、ユーザー登録ができず、再び新規登録画面に遷移する。" do 
        visit root_path
        expect(page).to have_content("新規登録")
        visit new_user_registration_path
        @user.email = 'test.gmail.com'
        fill_in 'user_email', with: @user.email
        fill_in 'user_password', with: @user.password
        fill_in 'user_password_confirmation', with: @user.password_confirmation
        fill_in 'user_nickname', with: @user.nickname
        expect{find('input[name="commit"]').click}.to change{User.count}.by(0)
        expect(current_path).to eq "/users/sign_up"
      end
    end

  end

end

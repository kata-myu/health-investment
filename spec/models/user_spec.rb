require 'rails_helper'

RSpec.describe User, type: :model do

  before do
    @user = FactoryBot.build(:user)
  end


  describe '新規ユーザー登録' do

    context '登録できるとき' do
      it 'すべての情報が正しく入力されれば登録できる。' do
        expect(@user).to be_valid
      end
    end

    context '登録できないとき' do
      it 'nicknameがないと登録できない。' do
        @user.nickname = ""
        @user.valid?
        expect(@user.errors.full_messages).to include("Nickname can't be blank")
      end

      it 'passwordは半角英数混合でないと保存できない。' do
        @user.password = "11111111"
        @user.password_confirmation = "11111111"
        @user.valid?
        expect(@user.errors.full_messages).to include("Password Include both letters and numbers")
      end

      it 'passwordとpassword_confirmationが一致していないと保存できない' do
        @user.password = "test2222"
        @user.password_confirmation = "test3333"
        @user.valid?
        expect(@user.errors.full_messages).to include("Password confirmation doesn't match Password")
      end

      it 'emailは@がないと保存できない。' do
        @user.email = "test.gmail.com"
        @user.valid?
        expect(@user.errors.full_messages).to include("Email is invalid")
      end

    end

  end
end

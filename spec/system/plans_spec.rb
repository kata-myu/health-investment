require 'rails_helper'

RSpec.describe "Plans", type: :system do
  before do
    @user = FactoryBot.create(:user)
    @plan = FactoryBot.build(:plan)
  end

  describe "新規プラン登録" do

    context "登録に成功するとき" do
      it "正しく入力すれば、保存ができ、トップページに表示される。" do
        # ログインする
        visit new_user_session_path
        fill_in 'user_email', with: @user.email
        fill_in 'user_password', with: @user.password
        find('input[name="commit"]').click
        expect(current_path).to eq root_path
        # 日付とプランを入力する
        fill_in 'plan_date', with: '002021-04-15'
        fill_in 'plan_plan', with: 'サッカー'
        # 保存をクリックするとPlanモデルのカウントが１上がる。
        find('input[name="commit"]').click
        sleep(2)
        expect(Plan.count).to eq 1
        # 保存したプランが表示される
        expect(current_path).to eq root_path
        expect(page).to have_content('サッカー') 
      end


      it "簡単登録ボタンを押すと、予定が７こ保存される" do
        # ログインする
        visit new_user_session_path
        fill_in 'user_email', with: @user.email
        fill_in 'user_password', with: @user.password
        find('input[name="commit"]').click
        expect(current_path).to eq root_path
        # 簡単予定入力にホバーし、BasicをクリックするとPlanモデルのカウントが７上がる
        find("#quick-btn").hover
        find(".basic").click
        sleep(3)
        expect(Plan.count).to eq 21
      end


    end

    context "登録に失敗するとき" do
      it "正しく入力されていないと、保存ができず、トップページに表示されない。" do
      end

    end

  end
end

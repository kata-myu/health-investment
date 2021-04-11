require 'rails_helper'

RSpec.describe Plan, type: :model do

  before do
    @plan = FactoryBot.build(:plan)
  end
 
  describe "新規プラン登録" do

    context "保存できるとき" do
      it "すべての情報が正しく入力できていれば保存できる。" do
        expect(@plan).to be_valid
      end

    end

    context "保存できないとき" do
      it "プランが空だと保存できない。" do
        @plan.plan = ""
        @plan.valid?
        expect(@plan.errors.full_messages).to include("Plan can't be blank")
      end

      it "日付が空だと保存できない。" do
        @plan.date = ""
        @plan.valid?
        expect(@plan.errors.full_messages).to include("Date can't be blank")
      end

    end

  end
end

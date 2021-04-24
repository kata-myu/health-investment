require 'rails_helper'

RSpec.describe Group, type: :model do
  before do
    @group = FactoryBot.build(:group)
  end

  describe '新規グループ登録' do
    
    context '保存できるとき' do
      it 'すべての情報が正しく入力されていれば保存できる' do
        expect(@group).to be_valid
      end
    end

    context '保存できないとき' do
      it 'nameがないと保存できない。' do
        @group.name = ''
        @group.valid?
        expect(@group.errors.full_messages).to include("Nameを入力してください")
      end

      it 'promotionがないと保存できない。' do
        @group.promotion = ''
        @group.valid?
        expect(@group.errors.full_messages).to include("Promotionを入力してください")
      end
    end
  end
end

require 'rails_helper'

RSpec.describe Message, type: :model do

  before do
    user = FactoryBot.create(:user)
    group = FactoryBot.create(:group)
    @message = FactoryBot.build(:message, user_id: user.id, group_id: group.id)
  end

  describe '新規メッセージ投稿' do
    context '新規投稿できるとき' do
      it 'messageがあれば保存できる' do
        expect(@message).to be_valid
      end
    end

    context '新規投稿できないとき' do
      it 'contentがないと保存できない' do
        @message.content = ''
        @message.valid?
        expect(@message.errors.full_messages).to include("Contentを入力してください")
      end
    end
  end
end

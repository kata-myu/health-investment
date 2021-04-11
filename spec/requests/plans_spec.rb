require 'rails_helper'

RSpec.describe "Plans", type: :request do

  before do
    @plan = FactoryBot.create(:plan)
  end

  describe "GET #index" do
    it "indexアクションにアクセスすると正常にレスポンスが返ってくる" do
      get root_path
      expect(response.status).to eq 200
    end

    it "indexアクションにアクセスするとプランが表示されている。" do
      get root_path
      expect(response.body).to include(@plan.plan)
      # response.bodyでブラウザに表示されるHTMLが取得できる。
    end

  end

end

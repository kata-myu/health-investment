class PlansController < ApplicationController
  include PointActions
  include QuickActions
  include Chart
  include Push
  include RunCount

  before_action :quick_plan, only: [:basic, :normal, :hard]
  protect_from_forgery except: :destroy

  
  def index
    get_week

    @plan = Plan.new
    @point = current_user.point&.point

    @run_count = run_count #モジュールから呼び出し
  end


  def create
    registrated_plans = current_user.plans.where(date: params[:plan][:date])
    if registrated_plans.length <= 5
       @plan = current_user.plans.create(plan_params)
      redirect_to action: :index
    else
      redirect_to root_path, notice: "１日に登録できるプランの数は６つまでです！"
    end
  end


  def destroy
    plan = current_user.plans.find(params[:id])
    if plan.destroy
      render json:{plan: plan}
    else
      render json:{plan: "削除に失敗しました"}
    end
  end


  # 簡単登録
  def basic 
  end

  def normal 
  end

  def hard 
  end


  # プラン達成数グラフ
  def chart 
    chart_data
  end


  # ポイント付与
  def point 
    increase
  end

  # ポイントを減らす
  def decrease_point 
    decrease
  end


  # プッシュ通知
  def push
    push_action
  end



  private

  def plan_params
    params.require(:plan).permit(:plan, :date).merge(user_id: current_user.id)
  end


  def get_week
    wdays = ['(日)','(月)','(火)','(水)','(木)','(金)','(土)']

    @todays_date = Date.today

    @week_days = []

    @plans = Plan.where(user_id: current_user.id).where(date: @todays_date..@todays_date + 30)

    30.times do |x|
      plans = []
      plan = @plans.map do |plan|
        hash = {plan: plan.plan, id: plan.id}
        plans.push(hash) if plan.date == @todays_date + x   #←1回目は@todays_date + xに合うものしかplansにpushされない。4/1の予定が「サッカー」だけなら["サッカー"]となり、「サッカー」と「買い物」なら["サッカー", "買い物"]となる。
      end

      wday_num = (@todays_date + x).wday

      days = { :month => (@todays_date + x).month, :date => (@todays_date+x).day, wday: wdays[wday_num], :plans => plans}
      @week_days.push(days)
    end
  end
  
end

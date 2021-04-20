class PlansController < ApplicationController

  include PointActions
  include QuickActions
  before_action :quick_plan, only: [:basic, :normal, :hard]

  protect_from_forgery except: :destroy

  
  def index
    get_week
    @plan = Plan.new
    if user_signed_in?
      @user = current_user
      @point = current_user.point&.point
      @run_count = run_count
    end
    # @run = current_user.runs.where('created_at LIKE?', "%#{Date.today}%")
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
    plans = current_user.plans
    @day = Date.today
    
    achievements = []
    plans.each do |plan|
      if plan.achievement.present?
        achievements.push(plan)
      end
    end
    achievements_amount = []
    achievement_num = achievements.length
    7.times do |x|
      if x != 0 
        day_achieve = Achievement.where(date: Date.today - (x - 1)).where(user_id: current_user.id)
        day_num = day_achieve.length
        achievement_num = achievement_num - day_num
      end
      achievements_amount.push(achievement_num)
    end
    gon.achievements_array = achievements_amount.reverse

   
    @days = []
    7.times do |x|
      @days.push(@day - x)
    end
    gon.days = @days.reverse

    # ↓現状ポイントを表示する記述になっていないと思われる
    @points = []
    7.times do |x|
      today = Date.today
      point = User.where('created_at LIKE?', "%#{today - x}%")
      @points.push(point)
    end
    gon.point = @points.reverse
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
    date = Date.today

    if user_signed_in?
      plans = current_user.plans
      day_plans = plans.select{ |plan| plan.date == Date.today }
      achieve_plans = day_plans.select{ |plan| plan.achievement == nil }

      if achieve_plans.empty?
        render json: {achieve: "ok"}
      else
        render json: {achieve: "no"}
      end

    else
      render json: {achieve: "not login"}
    end
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


  # 継続日数を算出する
  def run_count
    count = 0
    @runs_a = []
    @days_a = []

    @days = []
    @runs = current_user.runs
    @runs.each do |run| 
      @days.push(run.date)
    end

    @days.each do |day|
      @days_a.push(day)
      count = count + 1
      if @days_a.length >= 2
        if @days_a[-2] != @days_a[-1] - 1
          @runs_a.push(count - 1)
          count = 1
        end
      end
    end

    if @runs_a.length == 0
      return @days_a.length
    else
      return @runs_a.max
    end
  end
  
end

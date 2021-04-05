class PlansController < ApplicationController
  def index
    get_week
    @month = Time.current.all_month
    @plan = Plan.new
  end

  def create
    @plan = Plan.create(plan_params)
    redirect_to action: :index
  end

  def basic 
    plans = {}
    7.times do |x|
      plan1 = Plan.create(plan: "ウォーキング20分", date: (Date.today + x), user_id: current_user.id)
      plan2 = Plan.create(plan: "腕立て伏せ15回", date: (Date.today + x), user_id: current_user.id)
      plan3 = Plan.create(plan: "腹筋15回", date: (Date.today + x), user_id: current_user.id)
      plans = {plan1: plan1, plan2: plan2, plan3: plan3}
    end
    render json: {plans: plans}
  end

  def normal 
    plans = {}
    7.times do |x|
      plan1 = Plan.create(plan: "ランニング20分", date: (Date.today + x), user_id: current_user.id)
      plan2 = Plan.create(plan: "腕立て伏せ30回", date: (Date.today + x), user_id: current_user.id)
      plan3 = Plan.create(plan: "腹筋30回", date: (Date.today + x), user_id: current_user.id)
      plans = {plan1: plan1, plan2: plan2, plan3: plan3}
    end
    render json: {plans: plans}
  end

  def hard 
    plans = {}
    7.times do |x|
      plan1 = Plan.create(plan: "ランニング40分", date: (Date.today + x), user_id: current_user.id)
      plan2 = Plan.create(plan: "腕立て伏せ60回", date: (Date.today + x), user_id: current_user.id)
      plan3 = Plan.create(plan: "腹筋60回", date: (Date.today + x), user_id: current_user.id)
      plans = {plan1: plan1, plan2: plan2, plan3: plan3}
    end
    render json: {plans: plans}
  end


  private
  def plan_params
    params.require(:plan).permit(:plan, :date).merge(user_id: current_user.id)
  end

  def get_week
    wdays = ['(日)','(月)','(火)','(水)','(木)','(金)','(土)']

    @todays_date = Date.today

    @week_days = []

    @plans = Plan.where(date: @todays_date..@todays_date + 30)

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

class PlansController < ApplicationController
  def index
    get_week
    @plan = Plan.new

    @point = current_user.point

    @run = Run.where('created_at LIKE?', "%#{Date.today}%")

    @run_count = run_count
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

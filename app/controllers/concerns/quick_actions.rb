module QuickActions
  extend ActiveSupport::Concern

  def quick_plan
    if params[:action] == "basic"
      menu1 = "ウォーキング20分"
      menu2 = "腕立て伏せ15回"
      menu3 = "腹筋15回"
    elsif params[:action] == "normal"
      menu1 = "ランニング20分"
      menu2 = "腕立て伏せ30回"
      menu3 = "腹筋30回"
    else
      menu1 = "ランニング40分"
      menu2 = "腕立て伏せ60回"
      menu3 = "腹筋60回"
    end

    plans = {}
    7.times do |x|
      pre_plans = current_user.plans.where(date: (Date.today + x))
      if pre_plans.length <= 3
        plan1 = Plan.create(plan: menu1, date: (Date.today + x), user_id: current_user.id)
        plan2 = Plan.create(plan: menu2, date: (Date.today + x), user_id: current_user.id)
        plan3 = Plan.create(plan: menu3, date: (Date.today + x), user_id: current_user.id)
        plans = {plan1: plan1, plan2: plan2, plan3: plan3}
      else
        render json: {plans: {}}
        return 
      end
    end
    render json: {plans: plans}
  end
end
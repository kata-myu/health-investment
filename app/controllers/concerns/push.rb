module Push
  extend ActiveSupport::Concern

  def push_action
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

end
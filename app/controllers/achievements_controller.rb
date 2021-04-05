class AchievementsController < ApplicationController
  protect_from_forgery except: :create

  def create
    plan = Plan.find(params[:id])
    achievement = Achievement.create(plan_id: plan.id, user_id: current_user.id)
    
    render json: {achievement: achievement}
  end

end

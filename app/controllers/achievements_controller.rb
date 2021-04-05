class AchievementsController < ApplicationController
  protect_from_forgery except: :create

  def create
    plan = Plan.find(params[:id])
    achievement = Achievement.create(plan_id: plan.id, user_id: current_user.id)

    plans = Plan.where(date: Date.today)
    judgment = plans.select{ |plan| plan.achievement == nil}
    if judgment.present?
      render json: {achievement: achievement, run: false}
    elsif judgment.empty?
      @run = Run.create(run: true, date: Date.today, user_id: current_user.id)
      render json: {achievement: achievement, run: true}
    end
    
  end

  def destroy
    plan = Plan.find(params[:id])
    achievement = plan.achievement
    achievement.destroy
    
    render json: {achievement: achievement}
  end

end

class PlansController < ApplicationController
  def index
    @plan = Plan.new
  end

  def create
    @plan = Plan.create(plan_params)
    redirect_to action: :index
  end

  private
  def plan_params
    params.require(:plan).permit(:plan, :date).merge(user_id: current_user.id)
  end
end

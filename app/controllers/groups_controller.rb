class GroupsController < ApplicationController

  def index
    @user_groups = current_user.groups
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.valid?
      @group.save
      GroupUser.create(group_id: @group.id, user_id: current_user.id)
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @group = Group.find(params[:id])
    @users = @group.users
  end

  private
  def group_params
    params.require(:group).permit(:name)
  end
end

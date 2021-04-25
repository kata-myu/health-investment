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
      redirect_to groups_path
    else
      render :new
    end
  end

  def show
    @group = Group.find(params[:id])
    @users = @group.users
    @message = Message.new
    @messages = @group.messages.includes(:user)

    achieves = []
    @users.each do |user|
      if user.runs.where(date: Date.today).present?
        achieves.push(user)
      end
    end
    @achieves = achieves.length
  end

  
  def search_group
    @groups = Group.all.includes(:users)

    @p = Group.ransack(params[:q])
    @groups = @p.result.includes(:users)
  end


  def join_group
    GroupUser.create(group_id: params[:id], user_id: current_user.id)
    redirect_to group_path(params[:id])
  end

  def leave_group
    group_user = GroupUser.find_by(group_id: params[:id], user_id: current_user.id)
    group_user.destroy
    redirect_to groups_path
  end


  private
  def group_params
    params.require(:group).permit(:name, :promotion)
  end
end

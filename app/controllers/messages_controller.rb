class MessagesController < ApplicationController
  
  def reload
    group = Group.find(params[:group_id])
    last_message_id = params[:id].to_i
    @messages = group.messages.where("id > ?", last_message_id)
  end

  def create
    @group = Group.find(params[:group_id])
    @message = @group.messages.new(message_params)
    @message.save
    redirect_to group_path(@group)
  end
  
  private
  def message_params
    params.require(:message).permit(:content).merge(user_id: current_user.id, group_id: params[:group_id])
  end
end

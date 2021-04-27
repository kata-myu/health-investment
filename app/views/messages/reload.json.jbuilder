json.array! @messages do |message|
  json.content message.content
  json.created_at message.created_at.strftime("%m/%d %H:%M")
  json.user_name message.user.nickname
  json.user_image url_for(message.user.image)
  json.id message.id
end
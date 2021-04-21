module PointActions
  extend ActiveSupport::Concern

  def increase

    users = User.all

    users.each do |user|
      if user.point == nil
        Point.create(point: 0, user_id: user.id)
      end

      if user.runs.length > 100
        user_point = user.point.point + 3
        user.point.update(point: user_point)
      elsif user.runs.length > 30
        user_point = user.point.point + 2
        user.point.update(point: user_point)
      elsif user.runs.length > 10
        user_point = user.point.point + 1
        user.point.update(point: user_point)
      else
        user_point = user_point 
      end
    end

    users.each do |user|
      if user.achievements.length > 1000
        user_point = user.point.point + 5
        user.point.update(point: user_point)
      elsif user.achievements.length > 500
        user_point = user.point.point + 4
        user.point.update(point: user_point)
      elsif user.achievements.length > 100
        user_point = user.point.point + 3
        user.point.update(point: user_point)
      elsif user.achievements.length > 50
        user_point = user.point.point + 2
        user.point.update(point: user_point)
      elsif user.achievements.length > 20
        user_point = user.point.point + 1
        user.point.update(point: user_point)
      elsif user.achievements.length > 7
        user_point = user.point.point + 0.5
        user.point.update(point: user_point)
      elsif user.achievements.length > 3
        user_point = user.point.point + 0.2
        user.point.update(point: user_point)
      else
        user_point = user_point
      end 
    end

    pre_point = current_user.point.point
    current_point = current_user.point.point - pre_point

    render json: {point: current_point}
  end


  def decrease
    users = User.all
    today = Date.today

    users.each do |user|
      if user.point == nil
        user.point.create(point: 0, user_id: user.id)
      end

      if (today - 200) > user.registration_date
        user_point = user.point.point - 2.4
        user.point.update(point: user_point)
      elsif (today - 100) > user.registration_date
        user_point = user.point.point - 1.8
        user.point.update(point: user_point)
      elsif (today - 50) > user.registration_date
        user_point = user.point.point - 1.2
        user.point.update(point: user_point)
      elsif (today - 40) > user.registration_date
        user_point = user.point.point - 0.6
        user.point.update(point: user_point)
      elsif (today - 30) > user.registration_date
        user_point = user.point.point - 0.3
        user.point.update(point: user_point)
      elsif (today - 7) > user.registration_date
        user_point = user.point.point - 0.2
        user.point.update(point: user_point)
      else
        user_point = user.user.point.point
      end
    end

    current_point = current_user.point.point
    render json: {point: current_point}
  end
end
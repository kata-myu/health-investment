module Chart
  extend ActiveSupport::Concern

  def chart_data
    #総達成数を取得
    plans = current_user.plans
    @day = Date.today
    
    achievements = []
    plans.each do |plan|
      if plan.achievement.present?
        achievements.push(plan)
      end
    end
    achievements_amount = []
    achievement_num = achievements.length
    7.times do |x|
      if x != 0 
        day_achieve = Achievement.where(date: Date.today - (x - 1)).where(user_id: current_user.id)
        day_num = day_achieve.length
        achievement_num = achievement_num - day_num
      end
      achievements_amount.push(achievement_num)
    end
    gon.achievements_array = achievements_amount.reverse

   
    @days = []
    7.times do |x|
      @days.push(@day - x)
    end
    gon.days = @days.reverse


    #１周間の継続日数を取得
    runs_numbers = []
    registration_date = current_user.registration_date
    today = Date.today
    date_range = [*(registration_date..today)]

    7.times do |x|
      count = 0
      date_range.each do |date|
        if current_user.runs.find_by(date: date).present?
          count += 1
        else
          count = 0
        end
      end
      runs_numbers.push(count)
      date_range.delete_at(-1)
    end

    gon.runs = runs_numbers.reverse
  end
  
end
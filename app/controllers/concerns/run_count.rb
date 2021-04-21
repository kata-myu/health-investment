module RunCount
  extend ActiveSupport::Concern

  # 継続日数を算出する
  def run_count
    count = 0
    @runs_a = []
    @days_a = []

    @days = []
    @runs = current_user.runs
    @runs.each do |run| 
      @days.push(run.date)
    end

    @days.each do |day|
      @days_a.push(day)
      count = count + 1
      if @days_a.length >= 2
        if @days_a[-2] != @days_a[-1] - 1
          @runs_a.push(count - 1)
          count = 1
        end
      end
    end

    if @runs_a.length == 0
      return @days_a.length
    else
      return @runs_a.max
    end
  end
  
end
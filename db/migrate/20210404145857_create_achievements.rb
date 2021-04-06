class CreateAchievements < ActiveRecord::Migration[6.0]
  def change
    create_table :achievements do |t|
      t.references :user, foreign_key: true
      t.references :plan, foreign_key: true
      t.date :date, null: false

      t.timestamps
    end
  end
end

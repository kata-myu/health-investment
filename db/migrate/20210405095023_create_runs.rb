class CreateRuns < ActiveRecord::Migration[6.0]
  def change
    create_table :runs do |t|
      t.boolean :run, null: false
      t.date :date, null: false
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end

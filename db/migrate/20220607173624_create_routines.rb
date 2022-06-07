class CreateRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :routines do |t|
      t.integer :user_id
      t.string :time_of_day
      t.string :reason
      t.string :notes

      t.timestamps
    end
  end
end

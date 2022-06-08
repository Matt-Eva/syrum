class CreateRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :routines do |t|
      t.references :user, foreign_key: true, nil: false
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end

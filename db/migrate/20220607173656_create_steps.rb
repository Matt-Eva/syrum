class CreateSteps < ActiveRecord::Migration[6.1]
  def change
    create_table :steps do |t|
      t.integer :number
      t.string :instructions
      t.references :product, foreign_key: true, nil: false
      t.references :routine, foreign_key: true, nil: false

      t.timestamps
    end
  end
end

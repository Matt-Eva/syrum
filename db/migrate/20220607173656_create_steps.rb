class CreateSteps < ActiveRecord::Migration[6.1]
  def change
    create_table :steps do |t|
      t.integer :number
      t.string :instructions
      t.integer :product_id
      t.integer :routine_id

      t.timestamps
    end
  end
end

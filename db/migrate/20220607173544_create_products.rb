class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :brand
      t.string :ingredients
      t.string :notes
      t.string :image
      t.references :user, foreign_key: true, nil: false

      t.timestamps
    end
  end
end

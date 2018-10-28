class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :meats
      t.string :sides
      t.string :toppings

      t.timestamps
    end
  end
end

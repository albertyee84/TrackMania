class AddTable < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.string :project_name
    end
  end
end

class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :user_id, null: false
      t.string :project_name, null: false

      t.timestamps
    end
    add_index :projects, :user_id
    add_index :projects, :project_name 
  end
end

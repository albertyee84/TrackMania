class AddIndexToProjects < ActiveRecord::Migration[5.2]
  def change
    drop_table :projects

    create_table :projects do |t|
      t.integer :user_id, null: false
      t.string :project_name, null: false
    end

    add_index :projects, :user_id
  end
end

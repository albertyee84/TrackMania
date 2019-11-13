class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.integer :project_id, null: false
      t.string :name, null: false
      t.string :status, null: false, default: "Current"
      t.string :description, null: false
      t.string :labels, null: false
      t.integer :requestor_id, null: false

      t.timestamps
    end
    add_index :stories, :project_id
    add_index :stories, :requestor_id
  end
end

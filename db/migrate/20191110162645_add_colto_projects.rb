class AddColtoProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :archived, :boolean, default: false
    add_index :projects, :project_name
    add_index :projects, :archived
  end
end

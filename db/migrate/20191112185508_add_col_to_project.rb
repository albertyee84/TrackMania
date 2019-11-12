class AddColToProject < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :favorite, :boolean, default: false
    add_index :projects, :favorite
  end
end

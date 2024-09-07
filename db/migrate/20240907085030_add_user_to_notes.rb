class AddUserToNotes < ActiveRecord::Migration[7.2]
  def change
    add_column :notes, :color, :string
    add_column :notes, :pinned, :boolean, default: false
    add_column :notes, :archived, :boolean, default: false
    add_reference :notes, :user, null: false, foreign_key: true
  end
end

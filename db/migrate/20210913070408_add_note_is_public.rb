class AddNoteIsPublic < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :public_status, :boolean, default: false
  end
end

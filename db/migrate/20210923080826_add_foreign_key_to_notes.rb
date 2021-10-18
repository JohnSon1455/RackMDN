class AddForeignKeyToNotes < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :notes, :users
  end
end

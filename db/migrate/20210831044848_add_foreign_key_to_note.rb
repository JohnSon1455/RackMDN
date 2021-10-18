class AddForeignKeyToNote < ActiveRecord::Migration[6.1]
  def change
    remove_column :notes, :user_id, :string
    add_reference :notes, :user, foreign_key: true
  end
end

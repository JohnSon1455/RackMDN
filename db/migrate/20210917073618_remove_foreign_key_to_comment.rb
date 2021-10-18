class RemoveForeignKeyToComment < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :comments, :users
  end
end

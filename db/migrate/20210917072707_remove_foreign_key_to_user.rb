class RemoveForeignKeyToUser < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :collections, :users
  end
end

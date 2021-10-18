class AddForeignKeyToCollections < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :collections, :users
  end
end

class AddIsCollectionToCollection < ActiveRecord::Migration[6.1]
  def change
    add_column :collections, :collection_status, :boolean, default: true
  end
end

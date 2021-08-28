class AddUsernameToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :name,  :string
    add_column :users, :photo, :string
    add_column :users, :intro, :text
  end
end

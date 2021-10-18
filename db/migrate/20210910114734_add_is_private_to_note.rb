class AddIsPrivateToNote < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :private_status, :boolean, default: false
  end
end

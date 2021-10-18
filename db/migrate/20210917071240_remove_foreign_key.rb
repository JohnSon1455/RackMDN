class RemoveForeignKey < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :notes, :users
  end
end

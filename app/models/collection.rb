class Collection < ApplicationRecord
  belongs_to :user
  belongs_to :note
  def self.search(search)
    if search
      where(['title LIKE ?', "%#{search}%"])
    else
      all
    end
  end
end

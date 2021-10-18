class Tag < ApplicationRecord
  has_many :taggings
  has_many :notes, through: :taggings

  def self.search(search) 
    if search
      where(['title LIKE ?', "%#{search}%"]) 
    else
      all 
    end	
  end 
end

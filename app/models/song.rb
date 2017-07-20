class Song < ApplicationRecord
  validates :title, :user, presence: true

  belongs_to :user

  has_many :comments

end

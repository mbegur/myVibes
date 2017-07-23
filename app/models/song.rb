require_relative 'cred.rb'

class Song < ApplicationRecord
  validates :title, :user, presence: true

  belongs_to :user

  has_many :comments

  has_attached_file :image, presence: true, url: ':s3_domain_url', path: '/:class/:attachment/:id_partition/:style/:filename', bucket: 'myvibes'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :image, less_than: 3.megabytes

  has_attached_file :track, presence: true, url: ':s3_domain_url', path: '/:class/:attachment/:id_partition/:style/:filename', bucket: 'myvibes'
  validates_attachment_content_type :track, content_type: /\Aaudio\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :track, less_than: 40.megabytes

end

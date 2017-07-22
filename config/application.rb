require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SoundCloudClone
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.paperclip_defaults = {
      :s3_host_name => "s3-us-west-1.amazonaws.com",
      :storage => :s3,
      :s3_region => 'us-west-1',
      :s3_credentials => {
        :bucket => ENV["S3_BUCKET_NAME"],
        :access_key_id => ENV["AWS_SECRET_ACCESS_KEY"],
        :secret_access_key => ENV["AWS_SECRET_ACCESS_KEY"]

      }

    }
  end
end

class AddCoverPicUrltoUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :cover_pic_url, :string
  end
end

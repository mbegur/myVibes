class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :description
      t.string :image_url
      t.string :genre
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :songs, :user_id
  end
end

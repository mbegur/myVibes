class RemoveGenreFromSongs < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :genre
  end
end

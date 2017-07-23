json.extract! song, :id, :title, :description, :user_id
json.image_file_name song.image.url
json.song_file_name song.track.url

json.user do
  json.extract! song.user, :username
end

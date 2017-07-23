json.extract! comment, :id, :body, :user_id
json.user_username comment.user.username
json.user_pic asset_path(comment.user.profilepic.url)
json.time time_ago_in_words(comment.created_at)

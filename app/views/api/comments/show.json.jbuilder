json.comment do
  json.extract! @comment, :id, :body, :user_id, :photo_id, :user
end
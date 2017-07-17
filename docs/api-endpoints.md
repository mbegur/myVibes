# API ENDPOINTS

## HTML API

### Root

- `GET /` : loads React web app

## JSON API

### Users

- `GET api/users` - gets all users
- `POST api/users` - creates new user
- `GET api/users/:id` - gets one user based on id

### Session

- `POST api/session` - log in user
- `DELETE api/session` - log out user

### Songs

- `GET api/songs` - gets all songs
- `GET api/songs/:id` - gets one song base on id
- `POST api/songs` - creates new song
- `DELETE api/songs/:id` - deletes song based on id
- `PATCH api/songs/:id` - edits song based on id

### Comments

- `GET api/songs/:id/comments` - gets all comments based on song id
- `POST api/comments` - creates new comment
- `DELETE api/comments/:id` - deletes comment based on id

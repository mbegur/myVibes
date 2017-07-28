# myVibes

[myVibes](https://myvibessoundcloud.herokuapp.com/) is a full stack web application built on a React/Redux frontend and a Ruby on Rails backend. Partially inspired by SoundCloud, SoundCloud lets users create, play, update, and delete their favorite songs and browse for new music all while continuously playing music while navigating the site.

## Features

- Robust front-end and back-end authentication
- Create, update, and delete songs
- Browse for music and have continuous playing music between pages
- Customizable user pages, including profile and cover photos
- Comments on all songs

### Technologies
- Ruby on Rails
- React.js
- Redux
- PostgreSQL
- AWS
- jQuery
- SASS
### Authentication

User's passwords are stored in the database as a salted hash using BCrypt. Salting a password prepends a random string the password so even users with duplicate passwords will not have the same hash stored in the backend.

![login_flow](/app/assets/images/auth.gif)

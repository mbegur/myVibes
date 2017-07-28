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


### Song CRUD

Create songs instantly from any page no matter where it was you were inspired. Easily update existing songs if you make any mistakes. Music can be edited from the song show page if it is your song.


![song_create](/app/assets/images/uploadpic.png)

### Continuous Music Playback

The music player shows up immediately on playing a song, and retains whatever the next song to play was at that moment. This means that until the user actually tries to play a new set of songs the next and back buttons will navigate through the queue that they initially clicked on, the same as on Google Music or Spotify.

![song_create](/app/assets/images/continuousplay.gif)


### Song Comments

Comment on all your favorite songs.

![comment](/app/assets/images/comments.gif)

## Future

#### Search

I plan to add a search-bar component to the nav-bar at the header that allows users to search for a user or song that person is looking for.

#### Likes

To make the user experience more friendly, I plan to add the option to like a song. This way a user can easily view songs they like on their user show page.

#### Playlists

Currently when you click a song, a random song will play after the song is completed or skipped that is pulled from my database of songs. I plan to have a user be able to create a playlist that works similarly to a queue. It will have easy accessibility on the user's show page.

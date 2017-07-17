## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar
 - (MusicPlayerContainer)

**MusicPlayerContainer**
  -SongProgress
  -SongDetail

**SongsContainer**
 - SongsHeader
  * SongIndex


**SearchResultsContainer**
 - Search
 - SongIndex

**SongIndex**
 - SongIndexItem
  + SongDetail
    - CommentsIndex
      - CommentIndexItem
    * Song

**NewSongContainer**
 - NewSong
  - NewSongForm
  - NewSongButton

**UsersContainer**
- UserIndexItem
 + UserDetail

**Search**
+ AutoSearch
* AutoSearchResults


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/song/:songId" | "SongsContainer" |
| "/home/search-results" | "SearchResultsContainer" |
| "/new-song" | "NewSongContainer" |
| "/search" | "Search" |
| "/new-comment" | "NewComment" |
| "/home/user/:userId" | "UsersContainer" |

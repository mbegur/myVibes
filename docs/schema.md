# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_pic_url | string    |

## songs
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
artist_id     | integer   | not null, foreign key
title         | string    | not null
description   | string    |
song_url      | string    | not null, indexed, unique
image_url     | string    |
genre         | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
song_id     | integer   | not null, foreign key (references songs), indexed
author_id   | integer   | not null, foreign key (references user), indexed

**BONUS**

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null, foreign key (references songs), indexed
user_id     | integer   | not null, foreign key (references user), indexed

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    |
img_name    | string    |

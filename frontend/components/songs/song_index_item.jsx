import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.playTheSong = this.playTheSong.bind(this);
  }

  playTheSong(song) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      this.props.receiveSingleSong(song);
    };
  }

  render() {
    const { song, receiveSingleSong } = this.props;
    console.log(song.user);

    return (
      <div className='overall-song-index-item'>
        <li className="song-index-item">
          <Link to={`/songs/${song.id}`}>
            <img className="song-index-image" height="180" width="180" src={song.image_file_name} alt="cover-photo" />
          </Link>
          <div>
            <button className="play-button" onClick={this.playTheSong(song)}><img src="http://res.cloudinary.com/mbegur/image/upload/v1500875354/if_button_green_play_50029_klsfgj.png" alt="Play_Button" height="42" width="42"></img></button>
          </div>
          <div>
            <ul>
              <Link className="link-to_song" to={`/songs/${song.id}`}><li className="song-title">{ song.title }</li></Link>
              <Link to={`/users/${song.user.id}`}><li className="song-username">{ song.user.username }</li></Link>
            </ul>
          </div>


        </li>
      </div>

    );
  }


}

export default SongIndexItem;
// <img src={song.image_url} alt={songs.name} />

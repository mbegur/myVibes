import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.playSong = this.playSong.bind(this);
  }

  playSong(song) {
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
        <Link className="link-to_song" to={`/songs/${song.id}`}><li className="song-index-item">
          <Link to={`/songs/${song.id}`}>
            <img className="song-index-image" height="180" width="180" src={song.image_file_name} alt="cover-photo" />
          </Link>
          <ul>
            <li className="song-title">{ song.title }</li>
            <li className="song-username">{ song.user.username }</li>
          </ul>
          <button onClick={this.playSong(song)}>play</button>
        </li></Link>
      </div>

    );
  }


}

export default SongIndexItem;
// <img src={song.image_url} alt={songs.name} />

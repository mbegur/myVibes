import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  render() {
    const { song } = this.props;

    return (
      <li className="song-index-item">
        <Link to={`/songs/${song.id}`}>
          <img className="song-index-image" height="150" width="150" src={song.image_file_name} alt="cover-photo" />
        </Link>
        <span> { song.title } </span>
      </li>
    );
  }


}

export default SongIndexItem;
// <img src={song.image_url} alt={songs.name} />

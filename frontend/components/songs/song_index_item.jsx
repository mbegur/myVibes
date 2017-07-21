import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  render() {
    const { song } = this.props;

    return (
      <li className="song-index-item">
        <Link to={`/songs/${song.id}`}>
          <span> { song.id } </span>
          <span> { song.title } </span>
        </Link>
      </li>
    );
  }


}

export default SongIndexItem;
// <img src={song.image_url} alt={songs.name} />

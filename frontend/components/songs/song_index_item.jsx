import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  render() {
    const { song } = this.props;

    return (
      <li className="song-index-item">
        <Link to={`/songs/${song.id}`}>
          <img src={`https://s3-us-west-1.amazonaws.com/myvibes/songs/images/000/000/0${song.id}/original/${song.image_file_name}`} alt="cover-photo" />
          <span> { song.id } </span>
          <span> { song.title } </span>
        </Link>
      </li>
    );
  }


}

export default SongIndexItem;
// <img src={song.image_url} alt={songs.name} />

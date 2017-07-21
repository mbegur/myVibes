import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  render() {
    const { song } = this.props;

    return (
      <li className="song-index-item">
        <Link to={`/songs/${song.id}`}>
          <img className="song-index-image" height="150" width="150" src={`https://s3-us-west-1.amazonaws.com/myvibes/songs/images/000/000/0${song.id}/original/${song.image_file_name}`} alt="cover-photo" />
        </Link>
        <span> { song.title } </span>
      </li>
    );
  }


}

export default SongIndexItem;
// <img src={song.image_url} alt={songs.name} />

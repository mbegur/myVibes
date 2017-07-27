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
    let songTitle;
    if (song.title.length > 25) {
      songTitle = song.title.slice(0, 25) + "...";
    } else {
      songTitle = song.title;
    }
    return (
      <div className='new-overall-song-index-item'>
        <li className="new-song-index-list-item">
          <div className='overall-splash-container'>
            <div className="new-song-index-item">
              <div className="container">
                <Link to={`/songs/${song.id}`}>
                  <img className="splash-index-image" src={song.image_file_name} alt="cover-photo" />
                </Link>
                <div className='middle'>
                  <button onClick={this.playTheSong(song)}>
                    <img src="https://res.cloudinary.com/mbegur/image/upload/v1500930685/noun_959858_cc_mwikpw.svg" alt="Play_Button" height="90" width="90"></img>
                  </button>
                </div>
              </div>


                <ul className="splash-list">
                  <li className="splash-title">
                    <Link className="link-to_song" to={`/songs/${song.id}`}>
                      <button className="splash-Detail">{ songTitle }</button>
                    </Link>
                  </li>
                  <li className="splash-username">
                    <Link to={`/users/${song.user.id}`}>
                      <button className="splash-Detail">{ song.user.username }</button>
                    </Link>
                  </li>
                </ul>



            </div>
          </div>


        </li>
      </div>

    );
  }


}

export default SongIndexItem;
// <img src={song.image_url} alt={songs.name} />

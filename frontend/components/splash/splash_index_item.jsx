import React from 'react';
import { Link } from 'react-router-dom';

class SplashIndexItem extends React.Component {
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

    return (
      <div className='overall-splash-container'>
        <div className="splash-index-item">
          <div className="container">
            <Link to={`/songs/${song.id}`}>
              <img className="splash-index-image" height="150" width="150" src={song.image_file_name} alt="cover-photo" />
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
                  <button className="splash-Detail">{ song.title }</button>
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

    );
  }


}

export default SplashIndexItem;
// 
// &nbsp;&nbsp;&nbsp;
//
//
//   &nbsp;&nbsp;&nbsp;

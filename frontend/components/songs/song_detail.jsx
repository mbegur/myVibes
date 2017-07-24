import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class SongDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleDelete = this.handleDelete.bind(this);
    this.playTheSong = this.playTheSong.bind(this);
  }
  //
  componentDidMount() {
    this.props.requestAllSongs();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.postId !== nextProps.match.params.postId) {
  //     this.props.requestSingleSong(nextProps.match.params.postId);
  //   }
  // }

  handleDelete(e) {
    e.preventDefault();
    var result = confirm("Are you sure you want to delete this song?");
    if (result) {
      this.props.deleteSong(this.props.song.id)
        .then(data => this.props.history.push(`/songs`));
    }
  }

  playTheSong(song) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      this.props.receiveSingleSong(song);
    };
  }

  render() {
    const { song, currentUser } = this.props;
    if (!song) {
      return null;
    }
    let deleteButton;
    if (currentUser && currentUser.id === song.user_id) {
      deleteButton = <button
        className='delete-button'
        onClick={this.handleDelete}>Delete Song</button>;
    }

    return (
      <div className="overall-song-detail-page">
        <header>
          <NavBarContainer />
        </header>
        <div className="song-detail-page">
          <div className='song-deets'>
            <div className='play-button-and-other-deets'>
              <button className="play-button" onClick={this.playTheSong(song)}>
                <img src="http://res.cloudinary.com/mbegur/image/upload/v1500930685/noun_959858_cc_mwikpw.svg" alt="Play_Button" height="55" width="55"></img>
              </button>
              <div>
                <div className='song-detail-title'>{song.title}</div>
                <div className='song-detail-username'>{song.user.username}</div>

                { deleteButton }
                <div className='song-detail-description'>{song.description}</div>
              </div>

            </div>

          </div>
          <img className="song-detail-image"
            height="300"
            width="300"
            src={song.image_file_name}
            alt="cover-photo" />

        </div>
      </div>
    );
  }
}

export default SongDetail;

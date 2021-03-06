import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import CommentContainer from '../comments/comment_container';
import SongUploadModal from '../songs/song_upload_modal';


class SongDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.playTheSong = this.playTheSong.bind(this);
  }
  //
  componentDidMount() {
    this.props.requestAllSongs();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.songId !== nextProps.match.params.songId) {
  //     this.props.requestSingleSong(nextProps.match.params.songId);
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
    let editButton;
    if (currentUser && currentUser.id === song.user_id) {
      deleteButton = <button
        className='delete-button'
        onClick={this.handleDelete}>Delete</button>;
    }

    if (currentUser && currentUser.id === song.user_id) {
      editButton = <SongUploadModal song={song} clearSongErrors={this.props.clearSongErrors}
    user={this.props.currentUser.id}
    type="edit"/>;
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
                <img src="https://res.cloudinary.com/mbegur/image/upload/v1500930685/noun_959858_cc_mwikpw.svg" alt="Play_Button" height="55" width="55"></img>
              </button>
              <div className='deets'>
                <div className='song-detail-title'>{song.title}</div>
                <div className='song-detail-username'><Link to={`/users/${song.user_id}`}>{song.user.username}</Link></div>
                <div className ='song-buttons'>
                  { deleteButton } &nbsp;&nbsp;
                  { editButton }
                </div>
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
        <div className="comment-container">
          <h1>Comments</h1><br />
          <CommentContainer songId={song.id}/>
        </div>
      </div>
    );
  }
}

export default withRouter(SongDetail);

import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class SongDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleDelete = this.handleDelete.bind(this);
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
          <h1>{song.title}</h1>
          {song.user.username}
          <img className="song-detail-image"
            height="180"
            width="180"
            src={song.image_file_name}
            alt="cover-photo" />
          { deleteButton }
        </div>
      </div>
    );
  }
}

export default SongDetail;

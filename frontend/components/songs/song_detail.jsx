import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class SongDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = this.props.songs[this.props.match.params.songId];
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleSong(this.props.match.params.songId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.postId !== nextProps.match.params.postId) {
      this.props.requestSingleSong(nextProps.match.params.postId);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    var result = confirm("Are you sure you want to delete this song?");
    if (result) {
      this.props.deleteSong(this.props.songs[this.props.match.params.songId].id)
        .then(data => this.props.history.push(`/songs`));
    }
  }


  render() {
    const { songs, currentUser } = this.props;
    const song = songs[this.props.match.params.songId];
    let deleteButton;
    if (currentUser && currentUser.id === song.user_id) {
      deleteButton = <button
        className='delete-button'
        onClick={this.handleDelete}>Delete Song</button>;
    }

    return (
      <div>
        <header>
          <NavBarContainer />
        </header>
        <div className="song_detail">
          <h1>{this.state.title}</h1>
          { deleteButton }
        </div>
      </div>
    );
  }
}

export default SongDetail;

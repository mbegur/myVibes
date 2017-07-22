import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class SongDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = this.props.songs[this.props.match.params.songId];
    console.log(this.state);
  }

  componentDidMount() {
    this.props.requestSingleSong(this.props.match.params.songId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.postId !== nextProps.match.params.postId) {
      this.props.requestSingleSong(nextProps.match.params.postId);
    }
  }



  render() {

    return (
      <div>
        <header>
          {NavBarContainer}
        </header>
        <div className="song_detail">
          <h1>{this.state.title}</h1>
        </div>
      </div>
    );
  }
}

export default SongDetail;

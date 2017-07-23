import React from 'react';
import { withRouter } from 'react-router';
import SongIndexItem from './song_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';

class SongIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllSongs();
  }

  render() {
    const { songs } = this.props;
    console.log(this.props);
    const allSongs = songs.map((song, id) => (<SongIndexItem key={`song-${id}`} song={song} />));
    //
    return (
      <div className="overall-index-page">
        <header>
          <NavBarContainer />
        </header>
        <div className="song-index-page">
          <h1>Stream</h1>
          <ul className="song-index-list">
            { allSongs }
          </ul>
        </div>
      </div>


    );
  }
}


export default SongIndex;

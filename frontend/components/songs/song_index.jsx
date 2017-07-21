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
    const allSongs = songs.map((song, id) => (<SongIndexItem key={`song-${id}`} song={song} />));
    //
    return (
      <div>
        <header>
          <NavBarContainer />
        </header>
        <ul>
          { allSongs }
        </ul>
      </div>


    );
  }
}


export default SongIndex;

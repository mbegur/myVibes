import React from 'react';
import { withRouter } from 'react-router';
import SongIndexItem from './song_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';

class SongIndex extends React.Component {

  constructor(props) {
    super(props);
    this.songsSearched = this.songsSearched.bind(this);

  }

  componentDidMount(){
    this.props.requestAllSongs();
  }





  render() {
    const { songs, receiveSingleSong, playSong } = this.props;
    let allSongs;
    let header;
    if (this.props.match && this.props.match.params.path === "/songs") {
      allSongs = songs.map((song, id) => (<SongIndexItem key={`song-${id}`} song={song} playSong={playSong} receiveSingleSong={receiveSingleSong}/>));
      header = 'Stream';
      return (
        <div className="new-overall-index-page">
          <header>
            <NavBarContainer />
          </header>
          <div className="new-song-index-page">
            <h1>{ header }</h1>
            <ul className="new-song-index-list">
              { allSongs }
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div className="new-overall-index-page">
        <header>
          <NavBarContainer />
        </header>
        <div className="new-song-index-page">
          <h1>{ header }</h1>
          <ul className="new-song-index-list">
            { allSongs }
          </ul>
        </div>
      </div>


    );
  }
}


export default SongIndex;

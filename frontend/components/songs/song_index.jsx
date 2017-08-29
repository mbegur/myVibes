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

  componentWillReceiveProps(nextProps) {

    if ((nextProps.query !== this.props.query) && (nextProps.query !== "")) {
      this.props.fetchAllSongs().then(
        () => {
          this.setState({ filteredSongs: this.searchedSongs() });
        }
      );
    }
  }

  songsSearched() {
    let searchedSongs = [];
    if (this.props.match && this.props.match.params.path === "/songs") {
      return this.props.songs;
    }
    for (var i = 0; i < this.props.songs.length; i++) {
      let song = this.props.songs[i].title.toString().toLowerCase();
      let user = this.props.songs[i].user.username.toString().toLowerCase();
      let search = this.props.input.toString().toLowerCase();
      if (song.includes(search) || user.includes(search)) {
        searchedSongs.push(this.props.songs[i]);
      }
    }

    return searchedSongs;
  }

  render() {
    console.log(this.props);
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
    if (this.props.input) {
      let searched = this.songsSearched();
      allSongs = searched.map((song, id) => (<SongIndexItem key={`song-${id}`} song={song} playSong={playSong} receiveSingleSong={receiveSingleSong}/>));
      header = 'Search Results';
    } else {
      header = 'Stream';
      allSongs = songs.map((song, id) => (<SongIndexItem key={`song-${id}`} song={song} playSong={playSong} receiveSingleSong={receiveSingleSong}/>));
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

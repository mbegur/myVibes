import React from 'react';
import { withRouter } from 'react-router';
import SplashIndexItem from './splash_index_item';

class SplashIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllSongs();
  }

  render() {
    const { songs, receiveSingleSong} = this.props;
    const allSongs = songs.map((song, id) => (<SplashIndexItem key={`splash-${id}`} song={song}  receiveSingleSong={receiveSingleSong}/>));
    //
    return (

        <div className="splash-index-page">
          <h1 className="splash-header">Hear what's trending in the myVibes community</h1>
          <div className="splash-index-list">
            { allSongs }
          </div>
        </div>


    );
  }
}


export default SplashIndex;

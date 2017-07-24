import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { selectAllSongs, selectListOfSongs} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    songs: selectAllSongs(state),
    currentSong: state.songs.currentSong,
    playlist: selectListOfSongs(state)
  };
};


export default connect(mapStateToProps, null)(AudioPlayer);

import { connect } from 'react-redux';
import { receiveSingleSong, requestAllSongs } from '../../actions/song_actions';
import { fiveRandomSongs, selectAllSongs } from '../../reducers/selectors';
import SplashIndex from './splash_index';

const mapStateToProps = state => ({
  songs: fiveRandomSongs(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveSingleSong: song => dispatch(receiveSingleSong(song)),
  requestAllSongs: () => dispatch(requestAllSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashIndex);

import { connect } from 'react-redux';
import { requestAllSongs, requestSingleSong, clearErrors, receiveSingleSong } from '../../actions/song_actions';
import SongIndex from './song_index';
import { selectAllSongs } from '../../reducers/selectors';

const mapStateToProps = state => ({
  songs: selectAllSongs(state),
  errors: state.songs.errors,

});

const mapDispatchToProps = (dispatch) => ({
  requestAllSongs: (user) => dispatch(requestAllSongs({ user })),
  requestSingleSong: (user) => dispatch(requestSingleSong({ user })),
  clearErrors: () => dispatch(clearErrors()),
  receiveSingleSong: (song) => dispatch(receiveSingleSong(song))
  // receiveErrors: (err) => dispatch(receiveErrors(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);

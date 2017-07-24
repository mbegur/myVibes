import { connect } from 'react-redux';
import SongDetail from './song_detail';
import {
  requestAllSongs,
  requestSingleSong,
  clearErrors,
  deleteSong,
  receiveSingleSong
  } from '../../actions/song_actions';


const mapStateToProps = (state, { match }) => ({
  song: state.songs.songs[match.params.songId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleSong: id => dispatch(requestSingleSong(id)),
  deleteSong: id => dispatch(deleteSong(id)),
  requestAllSongs: () => dispatch(requestAllSongs()),
  receiveSingleSong: (song) => dispatch(receiveSingleSong(song)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);

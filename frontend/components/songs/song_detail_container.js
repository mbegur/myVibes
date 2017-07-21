import { connect } from 'react-redux';
import SongDetail from './song_detail';
import {
  requestAllSongs,
  requestSingleSong,
  clearErrors,
  deleteSong,
  } from '../../actions/song_actions';


const mapStateToProps = state => ({
  songs: state.songs.songs,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleSong: id => dispatch(requestSingleSong(id)),
  deleteSong: id => dispatch(deleteSong(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);

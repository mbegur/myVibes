import { connect } from 'react-redux';
import SongDetail from './song_detail';
import {
  requestAllSongs,
  requestSingleSong,
  clearErrors,
  deleteSong,
  } from '../../actions/song_actions';


const mapStateToProps = state => ({
      song: state.songs.songs
});

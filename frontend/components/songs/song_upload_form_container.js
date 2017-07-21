import { connect } from 'react-redux';
import SongUploadForm from './song_upload_form';

import { createSong }
  from '../../actions/song_actions';


const mapStateToProps = (state, ownProps) => ({
  id: state.session.currentUser.id,
  errors: state.songs.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createSong: song => dispatch(createSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongUploadForm);

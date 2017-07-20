import { connect } from 'react-redux';
import { requestAllSongs, requestSingleSong, clearErrors } from '../../actions/auth_actions';
import SongIndex from './song_index';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  requestAllSongs: (user) => dispatch(requestAllSongs({ user })),
  requestSingleSong: (user) => dispatch(requestSingleSong({ user })),
  clearErrors: () => dispatch(clearErrors())
  // receiveErrors: (err) => dispatch(receiveErrors(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);

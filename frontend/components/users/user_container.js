import { connect } from 'react-redux';
import { requestSingleUser, requestSongsByUser } from '../../actions/user_actions';
import { requestSingleSong, receiveSingleSong } from '../../actions/song_actions';
import UserShowPage from './user_show_page';
import { allSongsByUser } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user.user,
  songs: allSongsByUser(state),
  // errors: state.user.errors,
});

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id)),
  requestSongsByUser: id => dispatch(requestSongsByUser(id)),
  receiveSingleSong: song => dispatch(receiveSingleSong(song))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShowPage);

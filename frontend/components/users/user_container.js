import { connect } from 'react-redux';
import { requestSingleUser, requestSongsByUser, updateUser} from '../../actions/user_actions';
import UserShowPage from './user_show_page';
import { selectAllSongs } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user,
  songs: selectAllSongs(state),
  // errors: state.user.errors,
});

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id)),
  requestSongsByUser: id => dispatch(requestSongsByUser(id)),
  updateUser: (id, user) => dispatch(updateUser(id, user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShowPage);

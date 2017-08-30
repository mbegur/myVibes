import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/auth_actions';
import { requestAllSongs } from '../../actions/song_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  requestAllSongs: () => dispatch(requestAllSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

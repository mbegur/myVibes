import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/auth_actions';
import { receiveSearch } from '../../actions/search_actions';
import { requestAllSongs } from '../../actions/song_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  input: state.search.input
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  receiveSearch: (input) => dispatch(receiveSearch(input)),
  requestAllSongs: () => dispatch(requestAllSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

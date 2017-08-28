import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/auth_actions';
import { receiveSearch } from '../../actions/search_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  receiveSearch: (input) => dispatch(receiveSearch(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

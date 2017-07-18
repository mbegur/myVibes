import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/auth_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

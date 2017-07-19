import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/auth_actions';
import Login from './log_in_form';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login({ user })),
  // receiveClearErrors: () => dispatch(receiveClearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

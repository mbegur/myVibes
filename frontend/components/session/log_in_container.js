import { connect } from 'react-redux';
import { login, receiveErrors, clearErrors } from '../../actions/auth_actions';
import Login from './log_in_form';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login({ user })),
  clearErrors: () => dispatch(clearErrors())
  // receiveClearErrors: () => dispatch(receiveClearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

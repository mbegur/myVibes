import { connect } from 'react-redux';
import { signup, login, receiveErrors } from '../../actions/auth_actions';
import Signup from './sign_up_form';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup({ user })),
  login: (user) => dispatch(login({ user })),
  // receiveErrors: (err) => dispatch(receiveErrors(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

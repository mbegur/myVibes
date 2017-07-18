import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/auth_actions';
import SessionForm from './session_form';
import { Link, withRouter } from 'react-router-dom';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signup') ? signup : login;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));

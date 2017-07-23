import { connect } from 'react-redux';
import { requestSingleUser} from '../../users/user_actions';
import UserShowPage from './user_show_page';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.user.errors
});

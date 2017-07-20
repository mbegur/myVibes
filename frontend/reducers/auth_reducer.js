import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/auth_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const AuthReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, { errors });
    case CLEAR_ERRORS:
      const newErrors = [];
      return merge({}, nullUser, { newErrors });
    default:
      return state;
  }
};

export default AuthReducer;

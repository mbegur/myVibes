import { RECEIVE_SINGLE_USER,
  RECEIVE_USER_ERRORS,
  RECEIVE_USER_SONGS, } from '../actions/user_actions';

const defaultState = {
  user: null,
  songs: null,
  errors: []
};

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      const newState = Object.assign({}, state);
      return Object.assign(newState,{ user: action.user });
    case RECEIVE_USER_SONGS:
      const newState2 = Object.assign({}, state);
      return Object.assign({}, newState2, { songs: action.songs });
    case RECEIVE_USER_ERRORS:
      const newState3 = Object.assign({}, state);
      return Object.assign(newState3, { errors: action.errors});
    default:
      return state;
  }
};

export default UserReducer;

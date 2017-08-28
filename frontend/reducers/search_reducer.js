import merge from 'lodash/merge';

import { RECEIVE_SEARCH } from '../actions/search_actions';

const defaultState = {
  input: null
};

const SearchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH:
      let newState = merge({}, state);
      newState.input = action.input;
      return newState;
    default:
      return state;
  }
};

export default SearchReducer;

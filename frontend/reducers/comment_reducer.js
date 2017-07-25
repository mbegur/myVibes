import { RECEIVE_SINGLE_COMMENT,
         RECEIVE_ALL_COMMENTS,
         REMOVE_COMMENT,
         COMMENT_ERRORS,
         CLEAR_COMMENT_ERRORS
       } from '../actions/comment_actions';

const _initialState = {
  comments: {},
  errors: []
};

const CommentReducers = (state = _initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return Object.assign(newState, {comments: action.comments});
    case RECEIVE_SINGLE_COMMENT:
      newState.comments[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState.comments[action.comment.id];
      return newState;
    case COMMENT_ERRORS:
      return Object.assign(newState, {errors: action.errors});
    case CLEAR_COMMENT_ERRORS:
      return Object.assign(newState, {errors: action.errors});
    default:
      return state;
  }
};

export default CommentReducers;

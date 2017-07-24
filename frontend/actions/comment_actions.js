import * as CommentApiUtil from '../util/comment_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const COMMENT_ERRORS = 'COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';


export const receiveComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveComment = comment => {
 return {
  type: RECEIVE_SINGLE_COMMENT,
  comment
};};

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const commentErrors = errors => {
  return ({
    type: COMMENT_ERRORS,
    errors
  });
};

export const clearCommentErrors = () => ({
  type: CLEAR_COMMENT_ERRORS,
  errors: []
});

export const createComment = comment => dispatch => {
  return CommentApiUtil.createComment(comment).then(_comment =>
    dispatch(receiveComment(_comment)),
    error => dispatch(commentErrors(error.responseJSON))
  );
};

export const deleteComment = id => dispatch => (
  CommentApiUtil.deleteComment(id).then((comment) => (
    dispatch(removeComment(comment))
  ))
);

export const fetchCommentsBySong = id => dispatch => (
  CommentApiUtil.fetchCommentsBySong(id).then((comments) => (
    dispatch(receiveComments(comments))
  ))
);

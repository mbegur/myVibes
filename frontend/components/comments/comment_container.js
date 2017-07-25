import { connect } from 'react-redux';
import CommentIndex from './comment_index';

import { createComment, deleteComment,
         requestCommentsBySong, clearComments,
         clearCommentErrors } from '../../actions/comment_actions';
import { allCommentsBySong } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
 return {
  comments: allCommentsBySong(state),
  errors: state.comments.errors,
  songId: ownProps.songId,
  // currentUser: state.session.currentUser
};
};

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment({ comment } )),
  deleteComment: id => dispatch(deleteComment(id)),
  requestCommentsBySong: id => dispatch(requestCommentsBySong(id)),
  clearCommentErrors: () => dispatch(clearCommentErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentIndex);

import merge from 'lodash/merge';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBody = this.setBody.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderTrash = this.renderTrash.bind(this);
  }

  componentDidMount(){
    this.props.requestCommentsBySong(this.props.match.params.songId);
  }

  componentWillUnmount(){
    this.props.clearCommentErrors();
  }

  setBody(e){
    this.setState({ body: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(merge({}, this.state, {song_id: this.props.match.params.songId}))
    .then(()=> {
      this.setState({body: ''});
    });


  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>

          {this.props.errors.map((error, idx) => (
            <li key={`${idx}`}>{error}</li>
          ))}
        </ul>
      );
    }

  }

  renderTrash(userId, commentId) {
    const { currentUser } = this.props;
    let trash;
    if (currentUser) {
      if (currentUser.id === userId) {
        trash = <i onClick={()=>this.props.deleteComment(commentId)}
          className="fa fa-times" aria-hidden="true"></i>;
        }
      }
      return trash;
    }


  render(){
    const { comments, errors, currentUser } = this.props;
    let trash;
    let profPic;
    if (!currentUser) {
      return null;
    } else {
      profPic = currentUser.profile_pic_url;
    }
    let allComments = comments.map((comment, idx) => {
      return <li className='new-comment-item' key={idx}>
              <div className="user-comment-info">
                <Link to={`/user/${comment.user_id}`}>
                  <img className="new-comment-user-image" height="50" width="50" src={profPic}></img>
                </Link>
                <div className="user-comment-info-sub">
                  <Link className="comment-username-link" to={`/user/${comment.user_id}`}>
                    {comment.user_username}
                  </Link>
                  <div>{comment.body}</div>
                </div>
              </div>

              <div className='new-comment-info'>
                <br/>
              <span>{comment.time} ago&nbsp;</span>
              </div>
              </li>;
    });
    if (allComments.length === 0) {
      allComments = <div>There are no comments.<br/>

      </div>;
    }


    return(
      <div className="comment-form-container">
        {this.renderErrors()}
        <form className="new-comment-form" onSubmit={this.handleSubmit}>
          <input className="comment-input"
            value={this.state.body}
            onChange={this.setBody}
            placeholder="Write a Comment" />
          <input className='comment-submit' type='submit' value='Submit' />
        </form>
        <br /><br />
        <ul className='comment-list'>
          {allComments}
        </ul>
      </div>

    );
  }
}

export default withRouter(CommentIndex);

// <img src={comment.user_pic} alt="profilepic" /><br/>

// {this.renderTrash(comment.user_id, comment.id)}

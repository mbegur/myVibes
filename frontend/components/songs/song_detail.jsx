import React from 'react';
import { Link } from 'react-router-dom';

class PostEdit extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = this.props.songs[this.props.match.params.songId];
    console.log(this.state);
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    // this.setDefaultValues = this.setDefaultValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setTitle(e) {
    e.preventDefault();
    let newTitle = e.target.value;
    this.setState({ title: newTitle });
  }

  setBody(e) {
    e.preventDefault();
    let newBody = e.target.value;
    this.setState({ body: newBody });
  }

  // setDefaultValues() {
  //   this.setState({ title: this.props.post.title});
  //   this.setState({ body: this.props.post.body});
  // }

  componentDidMount() {
    this.props.requestSinglePost(this.props.match.params.postId);
  }

  handleSubmit(e) {
    this.props.editPost({
      id: this.props.match.params.postId,
      title: this.state.title,
      body: this.state.body
    });

  }

  render() {
    return (

      this.state.title ? <div className="overall-form">
        <h1>Edit This Post!</h1>
        <form className="under-form">
          <label>Title
            <input onChange={this.setTitle} value={this.state.title}></input>
          </label>

          <label>Body
            <input onChange={this.setBody} value={this.state.body}></input>
          </label>


          <Link onClick={this.handleSubmit} to="/"><button>Submit</button></Link>
        </form>
      </div> : "loading"
    );
  }
}

export default PostEdit;

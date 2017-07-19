import React from 'react';
import { withRouter } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.switchForm = this.switchForm.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
      // .then(() => this.props.closeLoginModal())
      .then(() => this.props.history.push("/"));
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({user: {username: "guestuser", password: "123456"}})
    .then(() => this.props.history.push("/"));
  }

  //
  // switchForm(e) {
  //   e.preventDefault();
  //   this.props.closeLoginModal();
  //   this.props.openSignupModal();
  //   this.props.receiveErrors([]);
  // }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors && this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">

          <h1>Log In</h1>
          {this.renderErrors()}
          <div className="login-form">
            <label>Username</label>
            <input type="text"
              onChange={this.update('username')}
              value={this.state.username}
            />
            <label>Password</label>
            <input type="password"
              onChange={this.update('password')}
              value={this.state.password}
            />
            <input type="submit" value="Log in" />
            <input type="submit" value="Guest login" onClick={this.handleDemoLogin} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);

// <div className="login-form-text">
//   Don't have an account?
//   <a href="#" onClick={this.switchForm}> Sign up</a>
// </div>

// <input type="submit" value="Guest login" onClick={this.handleGuestLogin} />

import React from 'react';
import { withRouter } from 'react-router';

class Signup extends React.Component {
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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(() => this.props.history.push("/songs"));
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({user: {username: "guestuser", password: "123456"}})
    .then(() => this.props.history.push("/songs"));
  }


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
      <div className="overall-form">
        <form className="form-box" onSubmit={this.handleSubmit} >
          <h1>Create Account</h1>
          {this.renderErrors()}
          <div className="form">
            <input type="text"
              className="auth-input"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="username"
            />
            <input type="password"
              className="auth-input"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="password"
            />
            <input className="form-but" type="submit" value="Sign up" />
            <input className="form-but" type="submit" value="Demo login" onClick={this.handleDemoLogin} />

            <div className="login-form-text">


            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);


// <input type="submit" value="Guest login" onClick={this.handleGuestLogin} />

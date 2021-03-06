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
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
      .then(() => this.props.history.push("/songs"));
  }

  handleDemoLogin(e) {
    e.preventDefault();
    let name = "guestuser";
    let password = "password";
    for (let i = 0; i < name.length; i++) {
      setTimeout(() => this.setState({
        username: name.slice(0, i + 1)}), (i * 80));
    }
    for (let j = 0; j < password.length; j++) {
      setTimeout(() => this.setState({
        password: password.slice(0, j + 1)}), ((j + 5) * 80));
    }
    const user = {
      username: 'guestuser',
      password: 'password'
    };
    setTimeout(() => this.props.login(user), 1500);
    // e.preventDefault();
    // this.props.login({user: {username: "guestuser", password: "123456"}})
    // .then(() => this.props.history.push("/songs"));
    // e.preventDefault();
    // let name = “guest”;
    // let password = “password”;

    // for (let j = 0; j < password.length; j++) {
    //   setTimeout(() => this.setState({
    //     password: password.slice(0, j + 1)}), ((j + 5) * 80));
    // }
    // const user = {
    //   username: ‘guestuser’,
    //   password: ‘password’
    // };
    // setTimeout(() => this.props.login({user}), 1500);
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
        <form className="form-box" onSubmit={this.handleSubmit}>

          <h1>Log In</h1>
          {this.renderErrors()}
          <div className="form">

            <input type="text"
              className="auth-input"
              onChange={this.update('username')}
              value={this.state.username}
              placeholder="username"
            />
            <input type="password"
              className="auth-input"
              onChange={this.update('password')}
              value={this.state.password}
              placeholder="password"
            />
          <input className="form-but" type="submit" value="Log in" />
            <input className="form-but" type="submit" value="Demo login" onClick={this.handleDemoLogin} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
// <input type="submit" value="Guest login" onClick={this.handleGuestLogin} />
  // <label>Username</label>
  // <label>Password</label>

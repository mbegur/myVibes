import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SessionModal from './session_modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({user: {username: "mallik", password: "123456"}});
  }

  logOutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return(
      <div className="hero-image">
        {this.props.currentUser ?
          <div className="if-user-logged-in">

            <div className="header">
              <h1>myVibes</h1>
            </div>
            <div className="auth-buttons">
              <button className="auth-buts" onClick={this.logOutUser}>Log Out</button>
            </div>
          </div> : <div className="if-user-logged-out">
          <div className="header">
            <h1>myVibes</h1>
          </div>
          <div className="auth-buttons">
            <button className="auth-buts" onClick={this.handleDemoLogin}>Demo Log In</button>
            &nbsp;
            <button className="auth-buts"><SessionModal className="auth-buts" formType={"signup"}/></button>
            &nbsp;
            <button className="auth-buts"><SessionModal className="auth-buts" formType={"login"}/></button>
          </div>

          </div>
        }
      </div>
    );
  }

}

export default NavBar;

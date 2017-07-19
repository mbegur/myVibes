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
      <div>
        {this.props.currentUser ?
          <div>
            <button onClick={this.logOutUser}>Log Out</button>
          </div> : <div>
            <button className="pure-button pure-button-active" onClick={this.handleDemoLogin}>Demo Log In</button>
            <button className="pure-button pure-button-active"><SessionModal formType={"signup"}/></button>
            <button className="pure-button pure-button-active"><SessionModal formType={"login"}/></button>
          </div>
        }
      </div>
    );
  }

}

export default NavBar;

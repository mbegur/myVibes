import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import AuthModal from './auth_modal';

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
            <button onClick={this.handleDemoLogin}>Demo Log In</button>
            &nbsp;
            <Link to="/login"><button>Log In</button></Link>
            &nbsp;
            <Link to="/signup"><button>Sign Up</button></Link>
          </div>
        }
      </div>
    );
  }

}

export default NavBar;

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

          </div>
          : <div className="if-user-logged-out">
          <div className="header">
            <h1>myVibes</h1>
          </div>
          <div className="auth-buttons">
            
              <button className="auth-buts" onClick={this.handleDemoLogin}>Demo Log In</button>
            
            &nbsp;
            
              <SessionModal formType={"login"}/>
            
            &nbsp;

              <SessionModal className="auth-buts" formType={"signup"}/>


          </div>

          </div>
        }

        <div className="welcome-text">
          <h3>Connect on myVibes</h3>
          <p>Explore, stream, and enjoy your favorite music from emerging and major artists</p>
          <SessionModal formType={"signup"}/>
        </div>


      </div>



    );
  }

}

export default NavBar;

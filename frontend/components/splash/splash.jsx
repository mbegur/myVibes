import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SessionModal from '../nav_bar/session_modal';
import SplashIndexContainer from './splash_index_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({user: {username: "guestuser", password: "password"}}).then(() => this.props.history.push("/songs"));
  }

  logOutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return(
      <div className="overall-splash">
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
          <p>Explore, stream, and enjoy your favorite music <br/>from emerging and major artists</p>
          <div className="splash-create-account-new">
            <SessionModal formType={"signup"}/>
          </div>

        </div>


      </div>
        <div>
          <SplashIndexContainer />
        </div>

      </div>


    );
  }

}

export default Splash;

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SessionModal from './session_modal';
import SongUploadModal from '../songs/song_upload_modal';
import SearchContainer from '../search/search_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
  }

  componentDidMount() {
    this.props.requestAllSongs();
  }



  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({user: {username: "guestuser", password: "password"}}).then(() => this.props.history.push("/songs"));
  }

  logOutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push("/"));
  }





  render() {
    return(
      <div className="overall-nav-bar">
        {this.props.currentUser ?
          <div className="if-user-logged-in">

            <div className="header-nav-bar">
              <Link to='/songs' onClick={this.clearSearch}>
                <button className='logo-buts'><h1>myVibes</h1></button>
              </Link>
            </div>
            <SearchContainer/>
            <div className="auth-buttons">
              <Link to={`/users/${this.props.currentUser.id}`}>
                <img height="35" width="35" src={this.props.currentUser.profile_pic_url}></img>
              </Link>
              <Link to={`/users/${this.props.currentUser.id}`}>
                <button className="username-nav">
                  {this.props.currentUser.username}
                </button>
              </Link>
              <SongUploadModal clearSongErrors={this.props.clearSongErrors}
            user={this.props.currentUser.id}
            type="upload"/>
              <button className="auth-buts" onClick={this.logOutUser}>Log Out</button>
            </div>

          </div>
          : <div className="if-user-logged-out">
          <div className="header-nav-bar">
            <Link to='/'>
              <button className='logo-buts'><h1>myVibes</h1></button>
            </Link>
          </div>
          <SearchContainer/>

          <div className="auth-buttons">

              <button className="auth-buts" onClick={this.handleDemoLogin}>Demo Log In</button>

            &nbsp;

              <SessionModal formType={"login"}/>

            &nbsp;

              <SessionModal className="auth-buts" formType={"signup"}/>


          </div>

          </div>
        }




      </div>



    );
  }

}

export default withRouter(NavBar);

// <div className="search-bar">
//   <input className="search-text" onChange={this.setSearch} placeholder="search" value={this.state.input}></input>
// </div>

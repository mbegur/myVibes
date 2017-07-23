import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
   this.props.requestSingleUser(parseInt(this.props.match.params.userId))
   .then(()=> {
     this.props.requestSongsByUser(parseInt(this.props.match.params.userId));
   });
 }

  render() {

    return(
      <div className="user_page">
        <div className="user-box">
          {this.props.user.username ? <div>{this.props.user.username}</div> :
          <div></div>
          }
        </div>
      </div>



    );
  }

}

export default UserShowPage;

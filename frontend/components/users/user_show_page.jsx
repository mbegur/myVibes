import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

  }

  componentDidMount(){
   this.props.requestSingleUser(parseInt(this.props.match.params.userId))
   .then(()=> {
     this.props.requestSongsByUser(parseInt(this.props.match.params.userId));
   });
 }

 componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(parseInt(nextProps.match.params.userId))
      .then(()=> {
        this.props.requestSongsByUser(parseInt(nextProps.match.params.userId));
      });
    }
  }

  render() {
    const { user } = this.props;
    return(
      <div>
        {user.username}
      </div>

    );
  }

}

export default UserShowPage;
// <div className="user_page">
//   <div className="user-box">
//     {this.props.user.username ? <div>{this.props.user.username}</div> :
//     <div></div>
//     }
//   </div>
// </div>

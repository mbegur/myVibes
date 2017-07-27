import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongIndexItem from '../songs/song_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';

class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    this.setProfilePic = this.setProfilePic.bind(this);
    this.setCoverPic = this.setCoverPic.bind(this);
  }

  setProfilePic(e) {
    let formData = new FormData();
    formData.append("user[image]", e.currentTarget.files[0]);
    this.props.updateUser(this.props.currentUser.id, formData);
  }

  setCoverPic(e) {
    let formData = new FormData();
    formData.append("user[coverpic]", e.currentTarget.files[0]);
    this.props.updateUser(this.props.currentUser.id, formData);
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
    console.log(this.props);
    const { user, currentUser, songs, receiveSingleSong } = this.props;
    let songList;
    let songListHeader;
    let editProfPicButton;
    let editCoverPicButton;
    if (!this.props.user) {
      return null;
    }
    const profilePic = user.profile_pic_url;
    const coverPic = user.cover_pic_url;


    if (this.props.songs.length > 0) {
      songList = songs.map((song, idx) =>
      (<SongIndexItem key={`song-${idx}`} song={song} receiveSingleSong={receiveSingleSong}/>));
      } else {
        songList = <div className='no-songs'><h3>{this.props.user.username} has no songs.</h3>
        </div>;
      }
    // if (this.props.songs.length > 0) {
    //   songListHeader = <h2>Your Tracks</h2>;
    //   }



        const bannerPictureStyle = {
          height: '100%',
          width: '100%',
          backgroundImage: `url(${coverPic})`
        };

    return(
      <div className="overall-user-page">
        <header>
          <NavBarContainer />
        </header>
        <div className="user-page">
          <div className="header-user-page">



            <div className="banner" style={bannerPictureStyle}>
              <div className="between-left-middle">
                <div className="header-left">
                  <div className="header-top">
                    <img className="prof-pic" height="170" width="170" src={profilePic} alt={user.username} />

                  </div>

                  <div>
                    {editProfPicButton}
                  </div>
                </div>
                <div>
                  <text>{user.username}</text>
                </div>
              </div>



              <div className="header-right">
                {editCoverPicButton}
              </div>
            </div>

          </div>
          <div className="songs-user-page">
            <br />
            <h2>Tracks</h2>
              <br />

            {songList}
          </div>
        </div>


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

//
// <span className='add-prof-button'>
// <i className="fa fa-fw fa-camera" aria-hidden="true"></i>
//   &nbsp;Profile Picture</span>

// <img className="cover-pic" height="400" width="400" src={coverPic} alt={user.username} style={{'position': 'absolute'}}/>

import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SongIndexContainer from './songs/song_index_container';
import SplashContainer from './splash/splash_container';
import SongDetailContainer from './songs/song_detail_container';
import UserContainer from './users/user_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

const App = () => (
  <div className='app'>
    <div>
      <Switch>
        <Route path="/songs/:songId" component={ SongDetailContainer }  />
        <Route path="/users/:userId" component={ UserContainer }  />
        <Route path="/songs" component={ SongIndexContainer }  />
        <Route path="/search" render={() => <SongIndexContainer search ={true}/>} />
        <AuthRoute path="/" component={ SplashContainer }  />
      </Switch>
    </div>
    <footer>
      <AudioPlayerContainer />
    </footer>

  </div>
);

export default App;

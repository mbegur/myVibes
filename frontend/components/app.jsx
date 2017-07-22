import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SongIndexContainer from './songs/song_index_container';
import SplashContainer from './splash/splash_container';
import SongDetailContainer from './songs/song_detail_container';
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
      <Route exact path="/" component={ SplashContainer }  />
      <Route exact path="/songs" component={ SongIndexContainer }  />
      <Route exact path="/songs/:songId" component={ SongDetailContainer }  />
    </div>
    <footer>

    </footer>

  </div>
);

export default App;

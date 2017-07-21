import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SongIndexContainer from './songs/song_index_container';
import SplashContainer from './splash/splash_container';
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
      <div className="homepage">
        <Route exact path="/" component={ SplashContainer }  />
      </div>
      <Route exact path="/songs" component={ SongIndexContainer }  />

    </div>
    <footer>

    </footer>

  </div>
);

export default App;

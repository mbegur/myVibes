import React from 'react';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
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
    <NavBarContainer />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>

  </div>
);

export default App;

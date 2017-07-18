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

const App = () => (
  <div>
    <h1>myVibes</h1>
    <NavBarContainer />
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </Switch>

  </div>
);

export default App;

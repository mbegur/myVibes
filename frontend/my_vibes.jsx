import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/auth_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  let store2;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store2 = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store2 = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store2 }/>, root);
});

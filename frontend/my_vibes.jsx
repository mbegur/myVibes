import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/auth_actions';
import { createSong, deleteSong } from './actions/song_actions';


document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  window.deleteSong = deleteSong;
  window.createSong = createSong;
  let store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

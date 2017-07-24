import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/auth_actions';
import { createSong, deleteSong } from './actions/song_actions';
import { selectListOfSongs, selectAllSongs } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  // window.dispatch = store.dispatch;
  window.deleteSong = deleteSong;
  window.createSong = createSong;
  window.selectListOfSongs = selectListOfSongs;
  window.selectAllSongs = selectAllSongs;
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
  window.store = store;
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

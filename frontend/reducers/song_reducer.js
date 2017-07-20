import { merge } from 'lodash';
import {
  RECEIVE_ALL_SONGS,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_SINGLE_SONG,
  REMOVE_SONG
  } from '../actions/song_actions';

const defaultState= Object.freeze({
  songs: {},
  errors: []
});

const SongReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_SONGS:
      const songs = action.songs;
      return merge({}, defaultState, { songs });
    case RECEIVE_SINGLE_SONG:
      const newSong = action.song;
      newState = merge({}, state);
      newState.songs[newSong.id] = newSong;
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case REMOVE_SONG:
      newState = Object.assign({}, state);
      delete newState.songs[action.id];
      return newState;
    case CLEAR_ERRORS:
      const newErrors = [];
      return merge({}, state, { newErrors });
    default:
      return state;
  }
};

export default SongReducer;

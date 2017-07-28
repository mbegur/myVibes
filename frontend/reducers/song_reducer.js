import { merge } from 'lodash';
import {
  RECEIVE_ALL_SONGS,
  RECEIVE_SONG_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_SINGLE_SONG,
  REMOVE_SONG
  } from '../actions/song_actions';

const defaultState= Object.freeze({
  songs: {},
  currentSong: null,
  errors: []
});

const SongReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_SONGS:
      const songs = action.songs;
      return merge({}, state, { songs: songs, errors: [] });
    case RECEIVE_SINGLE_SONG:
      const newSong = action.song;
      newState = merge({}, state);
      newState.currentSong = newSong.id;
      newState.songs[newSong.id] = newSong;
      return newState;
    case RECEIVE_SONG_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case REMOVE_SONG:
      newState = Object.assign({}, state);
      delete newState.songs[action.id];
      if (newState.currentSong === action.id) {
        return merge({}, newState, {currentSong: null});
      }
      return newState;
    case CLEAR_ERRORS:
      const newErrors = [];
      return merge({}, state, { errors: newErrors });
    default:
      return state;
  }
};

export default SongReducer;

import * as APIUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SINGLE_SONG = "RECEIVE_SINGLE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const receiveSingleSong = (song) => ({
  type: RECEIVE_SINGLE_SONG,
  song
});

export const removeSong = (song) => ({
  type: REMOVE_SONG,
  song
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = (errors) => ({
  type: CLEAR_ERRORS
});

export const requestAllSongs = () => dispatch =>(
  APIUtil.fetchAllSongs().then(songs => (
    dispatch(receiveAllSongs(songs))
  ))
);

export const requestSingleSong = (id) => dispatch =>(
  APIUtil.fetchSingleSong(id).then(song => (
    dispatch(receiveSingleSong(song))
  ))
);

export const createSong = (song) => dispatch => (
  APIUtil.createSong(song).then(song => (
    dispatch(receiveSingleSong(song))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const deleteSong = (id) => dispatch => (
  APIUtil.deleteSong(id).then(song => (
    dispatch(removeSong(song))
  ))
);

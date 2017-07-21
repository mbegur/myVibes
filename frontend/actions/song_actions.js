import * as APIUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SINGLE_SONG = "RECEIVE_SINGLE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const receiveSingleSong = (song) => ({
  type: RECEIVE_SINGLE_SONG,
  song
});

export const removeSong = (id) => ({
  type: REMOVE_SONG,
  id
});

export const receiveSongErrors = (errors) => ({
  type: RECEIVE_SONG_ERRORS,
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
  APIUtil.createSong(song).then(song => {
    return (
      dispatch(receiveSingleSong(song))
    );
  }, errors => (
    dispatch(receiveSongErrors(errors.responseJSON))
  ))
);

export const deleteSong = (id) => dispatch => (
  APIUtil.deleteSong(id).then(song => (
    dispatch(removeSong(song))
  ))
);

export const updateSong = (id, song) => dispatch => {
  return APIUtil.updateSong(id, song).then(song =>
    dispatch(receiveSingleSong(song)),
    error => dispatch(receiveSongErrors(error.responseJSON))
  );
};

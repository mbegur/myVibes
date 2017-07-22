import * as APIUtil from '../util/user_util';

export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_USER_SONGS = 'RECEIVE_USER_SONGS';
export const CLEAR_USER_SONGS = 'CLEAR_USER_SONGS';


export const receiveSingleUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user
});

export const userErrors = errors => {
  return ({
    type: RECEIVE_USER_ERRORS,
    errors
  });
};
// 
// export const receiveUserSongs = songs => {
//   return ({
//     type: RECEIVE_USER_SONGS,
//     songs
//   });
// };

export const requestSingleUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => (
    dispatch(receiveSingleUser(user))
  ))
);

export const updateUser = (id, user) => dispatch => {
  return APIUtil.updateUser(id, user).then(_user =>
    dispatch(receiveSingleUser(_user)),
    errors => dispatch(userErrors(errors.responseJSON))
  );
};
//
// export const fetchSongsByUser = id => dispatch => (
//   APIUtil.fetchSongsByUser(id).then(songs => (
//     dispatch(receiveUserSongs(songs))
//   ))
// );

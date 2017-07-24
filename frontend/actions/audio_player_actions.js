// export const PLAY_SONG = "PLAY_SONG";
// export const NEXT_SONG = "NEXT_SONG";
// export const QUEUE_SONG = "QUEUE_SONG";
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";


export const receiveCurrentSong = (song) => ({
  type: RECEIVE_CURRENT_SONG,
  song
});

export const PLAY_SONG = "PLAY_SONG";
export const NEXT_SONG = "NEXT_SONG";
export const QUEUE_SONG = "QUEUE_SONG";


export const playSong = (song) => ({
  type: PLAY_SONG,
  song
});

export const queueSong = (song) => ({
  type: QUEUE_SONG,
  song
});

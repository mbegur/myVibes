import values from 'lodash/values';

export const selectAllSongs = state => values(state.songs.songs);

export const allCommentsBySong = (state) => {
  const commentArray = values(state);
  return commentArray.reverse();
};

export const selectListOfSongs = (state)=> {
  let playlist = [];
  if (state.songs.currentSong) {
    const playingSong = state.songs.songs[state.songs.currentSong];
    playlist.push({name: playingSong.title, src: playingSong.song_file_name});
  }

  selectAllSongs(state).forEach(song => {
      if (song.id !== state.songs.currentSong) {
        playlist.push({
          name: song.title,
          src: song.song_file_name
        });
      }
    });
  return playlist;
};

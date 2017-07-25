import values from 'lodash/values';

export const selectAllSongs = state => values(state.songs.songs);

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

export const allCommentsBySong = (state) => {
  const commentArray = values(state.comments.comments);
  return commentArray.reverse();
};

export const fourRandomSongs = (state) => {
  const allSongs = selectAllSongs(state);
  let randomSongs = [];
  let randomSingleSong;
  if (allSongs.length > 4) {
    while (randomSongs.length < 4) {
      randomSingleSong = allSongs[Math.floor(Math.random()*allSongs.length)];
      if (!randomSongs.includes(randomSingleSong)) {
        randomSongs.push(randomSingleSong);
      }
    }
  } else {
    randomSongs = selectAllSongs(state);
  }
  return randomSongs;
};

export const allSongsByUser = state => {
  return values(state.user.songs);
};

import values from 'lodash/values';

export const selectAllSongs = (state) => {
  let songs = values(state.songs.songs);
  for (var i = songs.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = songs[i];
    songs[i] = songs[j];
    songs[j] = temp;
  }
  return songs;
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

export const fiveRandomSongs = (state) => {
  if (selectAllSongs(state).length > 5) {
    let copyofAllSongs = selectAllSongs(state);
    for (var i = copyofAllSongs.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = copyofAllSongs[i];
      copyofAllSongs[i] = copyofAllSongs[j];
      copyofAllSongs[j] = temp;
    }
    return copyofAllSongs.slice(0, 5);
  } else {
    return selectAllSongs(state);
  }
};

export const allSongsByUser = state => {
  return values(state.user.songs);
};

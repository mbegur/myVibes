import { merge } from 'lodash';
import {
  PLAY_SONG,
  NEXT_SONG,
  QUEUE_SONG,
} from '../actions/audio_player_actions';

const AudioPlayerReducer = (state = [], action) => {
  let nextState;
  Object.freeze(state);
  switch (action.type) {
    case PLAY_SONG:
      const nextSong = [{
        name: action.song.title,
        url: action.song.song_url,
        img: action.song.image_url
      }];
      nextState = Object.assign({}, state);
      return nextState.concat[nextSong];
    case NEXT_SONG:
  }
};

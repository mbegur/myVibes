import { merge } from 'lodash';
import {
  PLAY_SONG,
  NEXT_SONG,
  QUEUE_SONG,
} from '../actions/audio_player_actions';

const defaultState = {
  currentSong: null,
};

const AudioPlayerReducer = (state = [], action) => {
  let nextState;
  Object.freeze(state);
  switch (action.type) {
    case PLAY_SONG:
      Object.assign({}, state, {currentSong: action.song.id});
  }

};

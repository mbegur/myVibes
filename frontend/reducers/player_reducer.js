import { merge } from 'lodash';
import {
  RECEIVE_CURRENT_SONG
} from '../actions/audio_player_actions';

const defaultState = {
  currentSong: null,
};

const AudioPlayerReducer = (state = [], action) => {
  let nextState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      Object.assign({}, state, {currentSong: action.song.id});
  }

};

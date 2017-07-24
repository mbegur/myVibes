import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import SongReducer from './song_reducer';
import UserReducer from './user_reducer';
import AudioPlayerReducer from './player_reducer';

const rootReducer = combineReducers({
  session: AuthReducer,
  songs: SongReducer,
  user: UserReducer,
  audioPlayer: AudioPlayerReducer,
});

export default rootReducer;

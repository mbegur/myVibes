import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import SongReducer from './song_reducer';
import UserReducer from './user_reducer';
import CommentReducer from './comment_reducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: AuthReducer,
  songs: SongReducer,
  user: UserReducer,
  comments: CommentReducer,
  search: SearchReducer
});

export default rootReducer;

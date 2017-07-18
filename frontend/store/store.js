import { createStore, applyMiddleware } from 'redux';
import logger from 'redux_logger';
import thunk from 'redux_thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;

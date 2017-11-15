import { combineReducers } from 'redux';
import { postsReducer as posts } from './postsReducer';

const rootReducer = combineReducers({
  posts
});

export default rootReducer;

import { combineReducers } from 'redux';
import { postsReducer as posts } from './postsReducer';
import { categoriesReducer as categories } from './categoriesReducer';
import { commentsReducer as comments } from './commentsReducer';

const rootReducer = combineReducers({
  posts,
  categories,
  comments
});

export default rootReducer;

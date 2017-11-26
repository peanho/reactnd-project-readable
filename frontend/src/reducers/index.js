import { combineReducers } from 'redux';
import { postsReducer as posts } from './postsReducer';
import { categoriesReducer as categories } from './categoriesReducer';

const rootReducer = combineReducers({
  posts,
  categories
});

export default rootReducer;

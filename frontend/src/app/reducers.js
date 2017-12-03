import { combineReducers } from 'redux';
import { reducer as posts } from '../posts'
import { reducer as categories } from '../categories';
import { reducer as comments } from '../comments';

const rootReducer = combineReducers({
  posts,
  categories,
  comments
});

export default rootReducer;

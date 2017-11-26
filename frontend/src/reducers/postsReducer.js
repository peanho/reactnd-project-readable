import { combineReducers } from 'redux';
import { RECEIVE_POSTS, SORT_POSTS } from '../actions';
import { mapById } from './helpers';

const allPosts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts.map(it => it.id);
    default:
      return state;
  }
}

const postsById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return mapById(action.posts);
    default:
      return state;
  }
}

const sortBy = (state = 'TOP', action) => {
  switch (action.type) {
    case SORT_POSTS:
      return action.sortBy;
    default:
      return state;
  }
}

export const postsReducer = combineReducers({
  byId: postsById,
  allIds: allPosts,
  sortBy
});

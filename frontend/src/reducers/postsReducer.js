import { combineReducers } from 'redux';
import { RECEIVE_POSTS, ORDER_BY } from '../actions';
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

const orderBy = (state = 'voteScore', action) => {
  switch (action.type) {
    case ORDER_BY:
      return action.orderBy;
    default:
      return state;
  }
}

export const postsReducer = combineReducers({
  byId: postsById,
  allIds: allPosts,
  orderBy
});

import { combineReducers } from 'redux';
import { RECEIVE_POSTS, ORDER_BY } from '../actions';

function mapById(items = [], initialState = {}) {
  return items.reduce((state, item) => {
    state[item.id] = item;
    return state;
  }, initialState);
}

function allIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts.map(it => it.id);
    default:
      return state;
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return mapById(action.posts);
    default:
      return state;
  }
}

function orderBy(state = 'voteScore', action) {
  switch (action.type) {
    case ORDER_BY:
      return action.orderBy;
    default:
      return state;
  }
}

export const postsReducer = combineReducers({
  byId,
  allIds,
  orderBy
});

import { combineReducers } from 'redux';
import {
  RECEIVE_POSTS,
  SORT_POSTS,
  RECEIVE_POST_UPDATE
} from '../actions';
import {
  RECEIVE_COMMENTS
} from '../actions/commentsActions';
import { mapById } from './helpers';

/**
 * Updates the post with a new "comments" array. Solution adapted on redux
 * tutorial about updating normalized state.
 */
const addComments = (state, action) => {
  const { payload } = action;
  const { parentId, comments } = payload;
  const post = state[parentId];
  // XXX: should not have to repeat commentsReducer.allComments
  const commentsIds = comments.map(it => it.id);
  return {
    ...state,
    [parentId]: {
      ...post,
      comments: commentsIds
    }
  };
}

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
    case RECEIVE_POST_UPDATE:
      return post(state, action);
    case RECEIVE_COMMENTS:
      return addComments(state, action);
    default:
      return state;
  }
}

const post = (state, action) => {
  const { post } = action;
  const { id } = post;
  return {
    ...state,
    [id]: post
  };
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

import * as ReadableAPI from '../utils/ReadableAPI';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SORT_POSTS = 'SORT_POSTS';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export function requestPosts() {
  return {
    type: REQUEST_POSTS
  };
}

export function receivePosts( posts ) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function sortPosts( criterion ) {
  return {
    type: SORT_POSTS,
    sortBy: criterion
  }
}

export function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  };
}

export function receiveCategories( categories ) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return ReadableAPI.getPosts()
      .then(posts => dispatch(receivePosts(posts)));
  };
}

export function fetchCategories() {
  return dispatch => {
    dispatch(requestCategories());
    return ReadableAPI.getCategories()
      .then(categories => dispatch(receiveCategories()));
  }
}

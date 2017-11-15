import * as ReadableAPI from '../utils/ReadableAPI';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

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

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return ReadableAPI.getPosts()
      .then(posts => dispatch(receivePosts(posts)));
  };
}

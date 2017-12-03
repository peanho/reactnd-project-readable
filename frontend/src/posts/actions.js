import * as PostsAPI from '../apis/posts'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SORT_POSTS = 'SORT_POSTS';
export const RECEIVE_POST_UPDATE = 'RECEIVE_POST_UPDATE';

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
  };
}

export function receivePostUpdate( post ) {
  return {
    type: RECEIVE_POST_UPDATE,
    post
  };
}

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return PostsAPI.getAll()
      .then(posts => dispatch(receivePosts(posts)));
  };
}

export function sendVote(postId, vote) {
  return dispatch => {
    return PostsAPI.post(postId, vote)
      .then(post => dispatch(receivePostUpdate(post)));
  }
}

function shouldFetchPostDetail(state, postId) {
  const post = state.posts.byId[postId];
  return post === undefined;
}

export function fetchPostDetailIfNeeded(postId) {
  return (dispatch, getState) => {
    if (shouldFetchPostDetail(getState(), postId)) {
      return dispatch(fetchPosts());
    }
  }
}

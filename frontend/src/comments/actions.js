import * as PostsAPI from '../apis/posts.api';
import * as CommentsAPI from '../apis/comments.api';

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

const requestComments = postId => ({
  type: REQUEST_COMMENTS,
  postId
});

const receiveComments = payload => ({
  type: RECEIVE_COMMENTS,
  payload
});

const fetchComments = postId => dispatch => {
  dispatch(requestComments);
  return PostsAPI.get(postId)
    .then(payload => dispatch(receiveComments(payload)));
}

const shouldFetchComments = (state, postId) => {
  const { posts } = state;
  const { commentCount, comments = [] } = posts.byId[postId];
  return commentCount !== comments.length;
}

export const fetchCommentsIfNeeded = postId => (dispatch, getState) => {
  if (shouldFetchComments(getState(), postId)) {
    dispatch(fetchComments(postId));
  }
}

import * as PostsAPI from '../apis/posts'
import * as CommentsAPI from '../apis/comments'

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT_UPDATE = 'RECEIVE_COMMENT_UPDATE'

const requestComments = postId => ({
  type: REQUEST_COMMENTS,
  postId
})

const receiveComments = payload => ({
  type: RECEIVE_COMMENTS,
  payload
})

const receiveCommentUpdate = comment => {
  return {
    type: RECEIVE_COMMENT_UPDATE,
    comment
  }
}

export const fetchComments = postId => dispatch => {
  dispatch(requestComments)
  return PostsAPI.getComments(postId)
    .then(payload => dispatch(receiveComments(payload)))
}

export const sendVote = (commentId, vote) => dispatch => {
  return CommentsAPI.post(commentId, vote)
    .then(comment => dispatch(receiveCommentUpdate(comment)))
}

const shouldFetchComments = (state, postId) => {
  const { posts } = state
  const { commentCount, comments = [] } = posts.byId[postId]
  return commentCount !== comments.length
}

export const fetchCommentsIfNeeded = postId => (dispatch, getState) => {
  if (shouldFetchComments(getState(), postId)) {
    dispatch(fetchComments(postId))
  }
}

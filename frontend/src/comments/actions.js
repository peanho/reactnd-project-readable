import * as PostsAPI from '../apis/posts'
import * as CommentsAPI from '../apis/comments'

export const LOAD_ALL_REQUEST = 'readable/comments/LOAD_ALL_REQUEST'
export const LOAD_ALL_SUCCESS = 'readable/comments/LOAD_ALL_SUCCESS'
export const LOAD_ALL_FAILURE = 'readable/comments/LOAD_ALL_FAILURE'

export const LOAD_REQUEST = 'readable/comments/LOAD_REQUEST'
export const LOAD_SUCCESS = 'readable/comments/LOAD_SUCCESS'
export const LOAD_FAILURE = 'readable/comments/LOAD_FAILURE'

export const CREATE_REQUEST = 'readable/comments/CREATE_REQUEST'
export const CREATE_SUCCESS = 'readable/comments/CREATE_SUCCESS'
export const CREATE_FAILURE = 'readable/comments/CREATE_FAILURE'

export const UPDATE_REQUEST = 'readable/comments/UPDATE_REQUEST'
export const UPDATE_SUCCESS = 'readable/comments/UPDATE_SUCCESS'
export const UPDATE_FAILURE = 'readable/comments/UPDATE_FAILURE'

export const REMOVE_REQUEST = 'readable/comments/REMOVE_REQUEST'
export const REMOVE_SUCCESS = 'readable/comments/REMOVE_SUCCESS'
export const REMOVE_FAILURE = 'readable/commnets/REMOVE_FAILURE'

// local actions

const loadAllRequest = postId => ({
  type: LOAD_ALL_REQUEST,
  postId
})

const loadAllSuccess = payload => ({
  type: LOAD_ALL_SUCCESS,
  payload
})

const loadRequest = id => ({
  type: LOAD_REQUEST,
  id
})

const loadSuccess = comment => ({
  type: LOAD_SUCCESS,
  comment
})

const loadFailure = error => ({
  type: LOAD_FAILURE,
  payload: error
})

const updateRequest = id => ({
  type: UPDATE_REQUEST,
  id
})

const updateSuccess = comment => ({
  type: UPDATE_SUCCESS,
  comment
})

const updateFailure = error => ({
  type: UPDATE_FAILURE,
  error
})

const createRequest = () => ({
  type: CREATE_REQUEST
})

const createSuccess = comment => ({
  type: CREATE_SUCCESS,
  comment
})

const removeRequest = id => ({
  type: REMOVE_REQUEST,
  id
})

const removeSuccess = comment => ({
  type: REMOVE_SUCCESS,
  comment
})

const removeFailure = error => ({
  type: REMOVE_FAILURE,
  payload: error
})

// redux thunk - async actions

export const loadAll = postId => dispatch => {
  dispatch(loadAllRequest())
  return PostsAPI.getComments(postId)
    .then(payload => dispatch(loadAllSuccess(payload)))
}

export const loadAllIfNeeded = postId => (dispatch, getState) => {
  if (shouldLoadAll(getState(), postId)) {
    return dispatch(loadAll(postId))
  } 
  return Promise.resolve()
}

const shouldLoadAll = (state, postId) => {
  const { posts } = state
  const { commentCount, comments = [] } = posts.byId[postId]
  return commentCount !== comments.length
}

export const create = comment => dispatch => {
  dispatch(createRequest())
  return CommentsAPI.create(comment)
    .then(created => dispatch(createSuccess(created)))
}

export const update = comment => dispatch => {
  dispatch(updateRequest(comment.id))
  return CommentsAPI.update(comment)
    .then(updated => dispatch(updateSuccess(updated)))
}

export const remove = id => dispatch => {
  dispatch(removeRequest(id))
  return CommentsAPI.remove(id)
    .then(comment => dispatch(removeSuccess(comment)))
}

export const doVote = (id, vote) => dispatch => {
  dispatch(updateRequest(id))
  return CommentsAPI.vote(id, vote)
    .then(comment => dispatch(updateSuccess(comment)))
}


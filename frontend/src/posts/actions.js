import * as PostsAPI from '../apis/posts'

/* copying ducks */
export const LOAD_ALL_REQUEST = 'readable/posts/LOAD_ALL_REQUEST'
export const LOAD_ALL_SUCCESS = 'readable/posts/LOAD_ALL_SUCCESS'
export const LOAD_ALL_FAILURE = 'readable/posts/LOAD_ALL_FAILURE'

export const LOAD_REQUEST = 'readable/posts/LOAD_REQUEST'
export const LOAD_SUCCESS = 'readable/posts/LOAD_SUCCESS'
export const LOAD_FAILURE = 'readable/posts/LOAD_FAILURE'

export const CREATE_REQUEST = 'readable/posts/CREATE_REQUEST'
export const CREATE_SUCCESS = 'readable/posts/CREATE_SUCCESS'
export const CREATE_FAILURE = 'readable/posts/CREATE_FAILURE'

export const UPDATE_REQUEST = 'readable/posts/UPDATE_REQUEST'
export const UPDATE_SUCCESS = 'readable/posts/UPDATE_SUCCESS'
export const UPDATE_FAILURE = 'readable/posts/UPDATE_FAILURE'

export const REMOVE_REQUEST = 'readable/posts/REMOVE_REQUEST'
export const REMOVE_SUCCESS = 'readable/posts/REMOVE_SUCCESS'
export const REMOVE_FAILURE = 'readable/posts/REMOVE_FAILURE'

// local actions
export const SORT_BY = 'SORT_BY'

export const loadAllRequest = () => ({
  type: LOAD_ALL_REQUEST
})

export const loadAllSuccess = posts => ({
  type: LOAD_ALL_SUCCESS,
  posts
})

export const loadAllFailure = () => ({
  type: LOAD_ALL_FAILURE
})

export const loadRequest = id => ({
  type: LOAD_REQUEST,
  id
})

export const loadSuccess = post => ({
  type: LOAD_SUCCESS,
  post
})

export const loadFailure = error => ({
  type: LOAD_FAILURE,
  payload: error
})

export const createRequest = () => ({
  type: CREATE_REQUEST
})

export const createSuccess = post => ({
  type: CREATE_SUCCESS,
  post
})

export const createFailure = error => ({
  type: CREATE_FAILURE,
  payload: error
})

export const updateRequest = id => ({
  type: UPDATE_REQUEST,
  id
})

export const updateSuccess = post => ({
  type: UPDATE_SUCCESS,
  post
})

export const updateFailure = error => ({
  type: UPDATE_FAILURE,
  payload: error
})

export const removeRequest = id => ({
  type: REMOVE_REQUEST,
  id
})

export const removeSuccess = post => ({
  type: REMOVE_SUCCESS,
  post
})

export const removeFailure = error => ({
  type: REMOVE_FAILURE,
  payload: error
})


export const sortBy = criterion => ({
  type: SORT_BY,
  sortBy: criterion
})

// redux thunk - async actions


export const loadAll = () => dispatch => {
  dispatch(loadAllRequest())
  return PostsAPI.getAll()
    .then(posts => dispatch(loadAllSuccess(posts)))
}

export const load = id => dispatch => {
  dispatch(loadRequest(id))
  return PostsAPI.getOne(id)
    .then(post => dispatch(loadSuccess(post)))
}

export const loadIfNeeded = id =>
  (dispatch, getState) => {
    if (shouldLoad(getState(), id)) {
      return dispatch(load(id))
    }
    return Promise.resolve()
  }

const shouldLoad = (state, postId) => {
  const post = state.posts.byId[postId]
  return post === undefined
}

export const create = post => dispatch => {
  dispatch(createRequest())
  return PostsAPI.create(post)
    .then(created => dispatch(createSuccess(created)))
}

export const update = post => dispatch => {
  dispatch(updateRequest(post.id))
  return PostsAPI.update(post)
    .then(updated => dispatch(updateSuccess))
}

export const remove = id => dispatch => {
  dispatch(removeRequest(id))
  return PostsAPI.remove(id)
    .then(post => dispatch(removeSuccess(post)))
}

export const doVote = (id, vote) => dispatch => {
  dispatch(updateRequest())
  return PostsAPI.vote(id, vote)
    .then(post => dispatch(updateSuccess(post)))
}

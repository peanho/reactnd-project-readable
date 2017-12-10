import { combineReducers } from 'redux'
import { mapById } from '../utils/helpers'
import { 
  LOAD_ALL_SUCCESS,
  LOAD_SUCCESS,
  CREATE_SUCCESS,
  UPDATE_SUCCESS,
  REMOVE_SUCCESS,
  SORT_BY
} from './actions'
import { actions as commentActions } from '../comments'

const allPosts = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_SUCCESS:
      return action.posts.map(it => it.id)
    case LOAD_SUCCESS:
    case CREATE_SUCCESS:
      return state.concat(action.post.id)
    case REMOVE_SUCCESS:
      return state.filter(id => id !== action.post.id)
    default:
      return state
  }
}

const postsById = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ALL_SUCCESS:
      return mapById(action.posts)
    case LOAD_SUCCESS:
    case CREATE_SUCCESS:
    case UPDATE_SUCCESS:
      return post(state, action)
    case REMOVE_SUCCESS:
      return {
        ...state,
        [action.id]: undefined
      }
    case commentActions.LOAD_ALL_SUCCESS:
      return addComments(state, action)
    case commentActions.CREATE_SUCCESS:
      return addComment(state, action)
    default:
      return state
  }
}

const sortBy = (state = 'TOP', action) => {
  switch (action.type) {
    case SORT_BY:
      return action.sortBy
    default:
      return state
  }
}

const post = (state, action) => {
  const { post } = action
  const { id } = post
  return {
    ...state,
    [id]: {
      ...state[id],
      ...post
    }
  }
}

/*
 * Updates the post with a new "comments" array. Solution adapted from redux
 * tutorial about updating normalized state
 */
const addComments = (state, action) => {
  const { payload } = action
  const { parentId, comments } = payload
  const post = state[parentId]
  // XXX: should not have to repeat commentsReducer.allComments
  const commentsIds = comments.map(it => it.id)
  return {
    ...state,
    [parentId]: {
      ...post,
      comments: commentsIds
    }
  }
}

const addComment = (state, action) => {
  const { comment } = action
  const { id, parentId } = comment
  const post = state[parentId]
  return {
    ...state,
    [parentId]: {
      ...post,
      commentCount: post.commentCount + 1,
      comments: post.commentCount ? post.comments.concat([id]) : [id]
    }
  }
}

export const postsReducer = combineReducers({
  byId: postsById,
  allIds: allPosts,
  sortBy
})

export default postsReducer

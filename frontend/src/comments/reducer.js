import { combineReducers } from 'redux'
import {
  LOAD_ALL_SUCCESS,
  LOAD_SUCCESS,
  CREATE_SUCCESS,
  UPDATE_SUCCESS,
  REMOVE_SUCCESS
} from './actions'
import { mapById } from '../utils/helpers'

const allComments = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_SUCCESS:
      return action.payload.comments.map(it => it.id)
    case LOAD_SUCCESS:
    case CREATE_SUCCESS:
      return state.concat(action.comment.id)
    case REMOVE_SUCCESS:
      return state.filter(id => id !== action.comment.id)
    default:
      return state
  }
}

const commentsById = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ALL_SUCCESS:
      return mapById(action.payload.comments)
    case LOAD_SUCCESS:
    case CREATE_SUCCESS:
    case UPDATE_SUCCESS:
      return comment(state, action)
    case REMOVE_SUCCESS:
      return {
        ...state,
        [action.id]: undefined
      }
    default:
      return state
  }
}

const comment = (state, action) => {
  const { comment } = action
  const { id } = comment
  return {
    ...state,
    [id]: comment
  }
}

export const commentsReducer = combineReducers({
  byId: commentsById,
  allIds: allComments
})

export default commentsReducer

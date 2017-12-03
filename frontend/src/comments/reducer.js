import { combineReducers } from 'redux'
import { RECEIVE_COMMENTS, RECEIVE_COMMENT_UPDATE } from './actions'
import { mapById } from '../utils/helpers'

const allComments = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.payload.comments.map(it => it.id)
    default:
      return state
  }
}

const commentsById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return mapById(action.payload.comments)
    case RECEIVE_COMMENT_UPDATE:
      return comment(state, action)
    default:
      return state
  }
}

const comment = (state, action) => {
  const { comment } = action;
  const { id } = comment;
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

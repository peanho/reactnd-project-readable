import { combineReducers } from 'redux'
import { actions as postsActions } from '../posts'

const root = (state = {}, action) => {
  switch (action.type) {
    case postsActions.LOAD_ALL_REQUEST:
      return {
        ...state,
        posts: {
          isLoading: true
        }
      }
    case postsActions.LOAD_ALL_SUCCESS:
      return {
        ...state,
        posts: {
          isLoading: false
        }
      }
    default:
      return state
  }
}

const detail = (state = {
  post: {
    isLoading: false
  }
}, action) => {
  switch (action.type) {
    case postsActions.LOAD_REQUEST:
      return {
        ...state,
        post: {
          id: action.id,
          isLoading: true
        }
      }
    case postsActions.LOAD_SUCCESS:
      return {
        ...state,
        post: {
          id: action.post.id,
          isLoading: false
        }
      }
    case postsActions.LOAD_FAILURE:
      return {
        ...state,
        post: {
          isLoading: false,
          error: action.error
        }
      }
    default:
      return state
  }
}

const viewsReducer = combineReducers({
  root,
  detail
})

export default viewsReducer
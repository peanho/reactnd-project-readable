import { combineReducers } from 'redux'
import { reducer as posts } from '../posts'
import { reducer as categories } from '../categories'
import { reducer as comments } from '../comments'
import { reducer as views } from '../views'

const rootReducer = combineReducers({
  posts,
  categories,
  comments,
  views
})

export default rootReducer

import { combineReducers } from 'redux';
import { RECEIVE_CATEGORIES } from '../actions';
import { mapById } from './ReducersUtils';

const allCategories = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories.map(it => it.id);
    default:
      return state;
  }
}

const categoriesById = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return mapById(action.categories);
    default:
      return state;
  }
}

export default const categoriesReducer = combineReducers({
  byId: categoriesById,
  allIds: allCategories
});

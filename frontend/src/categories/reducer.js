import { combineReducers } from 'redux'
import { RECEIVE_CATEGORIES } from './actions';

const categoriesById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories.reduce((byId, category) => {
        byId[category.name] = category;
        return byId;
      }, {});
    default:
      return state;
  }
}

const allCategories = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories.map(it => it.name);
    default:
      return state;
  }
}

export const categoriesReducer = combineReducers({
  byId: categoriesById,
  allIds: allCategories
});

export default categoriesReducer;

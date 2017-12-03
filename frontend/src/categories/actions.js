import * as CategoriesAPI from '../apis/categories'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

export function receiveCategories( categories ) {
  return {
    type: RECEIVE_CATEGORIES,
    ...categories
  }
}

export function fetchCategories() {
  return dispatch => {
    dispatch(requestCategories())
    return CategoriesAPI.getAll()
      .then(categories => dispatch(receiveCategories(categories)))
  }
}

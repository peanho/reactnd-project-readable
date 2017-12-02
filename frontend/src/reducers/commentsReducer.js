import { combineReducers } from 'redux';
import { RECEIVE_COMMENTS } from '../actions/commentsActions.js';
import { mapById } from './helpers';

const allComments = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.payload.comments.map(it => it.id);
    default:
      return state;
  }
};

const commentsById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return mapById(action.payload.comments);
    default:
      return state;
  }
}

export const commentsReducer = combineReducers({
  byId: commentsById,
  allIds: allComments
});

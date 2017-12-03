import { createSelector } from 'reselect';

export const getAllIds = state => state.categories.allIds;
export const getByIds = state => state.categories.byId;

export const getAll = createSelector(
  [ getAllIds, getByIds ],
  (allIds, byId) => allIds.map(id => byId[id])
);

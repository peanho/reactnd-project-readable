import { createSelector } from 'reselect'

// selectors of store's state
const getAllIds = state => state.comments.allIds
const getById = state => state.comments.byId

const getParentFilter = (_, props) => props.parentId

export const getAll = createSelector(
  [getAllIds, getById],
  (ids, comment) => ids.map(id => comment[id])
)

export const getAllByPostId = createSelector(
  [getParentFilter, getAll],
  (filter, comments) => comments.filter(comment => comment.parentId === filter)
)
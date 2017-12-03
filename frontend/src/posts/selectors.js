import { createSelector } from 'reselect'

// selectors of store's state
const getAllIds = state => state.posts.allIds;
const getById = state => state.posts.byId;
const getSortBy = state => state.posts.sortBy;

// selector of props
export const getCategoryFilter = (_, props) => props.categoryFilter;

export const getAll = createSelector(
  [ getAllIds, getById ],
  ( ids, posts ) => ids.map(id => posts[id])
)

export const getVisiblePosts = createSelector(
  [ getCategoryFilter, getAll ],
  ( filter, posts ) => filter ? posts.filter(
    post => post.category === filter
  ) : posts
)

export const getSortedPosts = createSelector(
  [ getSortBy, getVisiblePosts ],
  ( sortBy, visiblePosts ) => {
    const posts = [...visiblePosts]
    switch (sortBy) {
      case 'TOP':
        return posts.sort(descending(voteScore))
      case 'NEW':
        return posts.sort(descending(timestamp))
      case 'HOT':
        return posts.sort(descending(commentCount))
      default:
        return posts;
    }
  }
)

const voteScore = post => post.voteScore
const timestamp = post => post.timestamp
const commentCount = post => post.commentCount
const descending = selector => (a, b) => selector(a) - selector(b)

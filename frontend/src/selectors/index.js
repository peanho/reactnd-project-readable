import { createSelector } from 'reselect';

const getPosts = state => state.posts.allIds.map(id => state.posts.byId[id]);
const getCategoryFilter = (_, props) => props.categoryFilter;
const getOrderBy = state => state.posts.orderBy;

const getFilteredPostsByCategory = createSelector(
  [ getCategoryFilter, getPosts ],
  (category, posts) => {
    if (category === undefined) {
      return posts;
    } else {
      return posts.filter(it => it.category === category);
    }
  }
);

export const getVisiblePostsOrdered = createSelector(
  [ getFilteredPostsByCategory, getOrderBy ],
  (posts, [criteria, order]) => {
    switch (order) {
      case 'desc':
        return posts.sort((a, b) => b[criteria] - a[criteria]);
      case 'asc':
        return posts.sort((a, b) => a[criteria] - b[criteria]);
      default:
        return posts;
    }
  }
);

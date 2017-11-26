import { createSelector } from 'reselect';

const getPostsIds = state => state.posts.allIds;
const getPostsById = state => state.posts.byId;
const getSortBy = state => state.posts.sortBy;
const getCategoryFilter = (_, props) => props.categoryFilter;
const getCategoriesIds = state => state.categories.allIds;
const getCategoriesByIds = state => state.categories.byId;

const getAllPosts = createSelector(
  [ getPostsIds, getPostsById ],
  (postsIds, postsById) => postsIds.map(id => postsById[id])
)

const getPostsFilteredByCategory = createSelector(
  [ getCategoryFilter, getAllPosts ],
  (category, posts) => {
    if (category === 'ALL_CATEGORIES') {
      return posts;
    } else {
      return posts.filter(it => it.category === category);
    }
  }
);

export const getVisiblePosts = createSelector(
  [ getPostsFilteredByCategory, getSortBy ],
  (unsorted, sortBy) => {
      const posts = [...unsorted];
    switch (sortBy) {
      case 'TOP':
        return posts.sort((st, nd) => nd.voteScore - st.voteScore);
      case 'NEW':
        return posts.sort((st, nd) => nd.timestamp - st.timestamp);
      case 'HOT':
        return posts.sort((st, nd) => nd.commentCount - st.commentCount);
      case 'NONE':
      default:
        return posts;
    }
  }
);

export const getCategories = createSelector(
  [ getCategoriesIds, getCategoriesByIds ],
  (allIds, byId) => allIds.map(id => byId[id])
);

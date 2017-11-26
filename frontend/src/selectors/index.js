import { createSelector } from 'reselect';

const getPostsIds = state => state.posts.allIds;
const getPostsById = state => state.posts.byId;
const getCategoryFilter = (_, props) => props.categoryFilter;
const getSortBy = state => state.posts.sortBy;

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

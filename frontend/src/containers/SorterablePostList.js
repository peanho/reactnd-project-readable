import { connect } from 'react-redux';
import Posts from '../components/Posts';

const createSelector = (inputSelectors, resultFunc) => {
  return (state, props) => {
    const args = inputSelectors.map(is => is.call(null, state, props));
    return resultFunc.call(null, ...args);
  }
}

const getPosts = state => state.posts;
const getCategoryFilter = (state, props) => props.category;
const getOrderBy = state => state.orderBy;

const getVisiblePosts = createSelector(
  [getCategoryFilter, getPosts],
  (categoryFilter, posts) => {
    if (categoryFilter === undefined) {
      return posts;
    } else {
      return posts.filter(it => it.category === categoryFilter);
    }
  }
);

const getVisiblePostsOrderedBy = createSelector(
  [getVisiblePosts, getOrderBy],
  (visiblePosts, orderBy) => visiblePosts.sort((a, b) => b[orderBy] - a[orderBy])
);

const orderBy = posts =>
  criteria => posts.sort((a, b) => a[criteria] - b[criteria]);

const mapStateToProps = (state, ownProps) => {
  const { posts } = state;
  const { match: { params } } = ownProps;
  const items = posts.allIds.map( id => posts.byId[id]);
  return {
    posts: getVisiblePostsOrderedBy({posts: items, orderBy: posts.orderBy}, params)
  };
}

const FilterablePostList = connect(
  mapStateToProps
)(Posts);

export default FilterablePostList;

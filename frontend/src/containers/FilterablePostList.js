import { connect } from 'react-redux';
import Posts from '../components/Posts';

const getVisiblePosts = (posts, category) => {
  const filterByCategory = category !== undefined;
  if (filterByCategory) {
    return posts.filter(it => it.category === category);
  } else {
    return posts;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { posts } = state;
  const { match: { params } } = ownProps;
  const items = posts.allIds.map( id => posts.byId[id]);
  return {
    posts: getVisiblePosts(items, params.category)
  };
}

const FilterablePostList = connect(
  mapStateToProps
)(Posts);

export default FilterablePostList;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, sortPosts } from '../actions';
import { getVisiblePosts } from '../selectors';
import Posts from '../components/Posts';

class PostsContainer extends Component {

  constructor(props) {
    super(props);
    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  sortBy(criterion) {
    const { dispatch } = this.props;
    dispatch(sortPosts(criterion));
  }

  render() {
    const { posts } = this.props;
    return (
      <Posts posts={posts} onSortCriteriaSelected={this.sortBy} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: getVisiblePosts(state, ownProps)
  };
}

export default connect(mapStateToProps)(PostsContainer);

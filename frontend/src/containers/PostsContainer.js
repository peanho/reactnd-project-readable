import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { getVisiblePostsOrdered } from '../selectors';
import Posts from '../components/Posts';

class PostsContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Posts posts={posts} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: getVisiblePostsOrdered(state, ownProps)
  };
}

export default connect(mapStateToProps)(PostsContainer);

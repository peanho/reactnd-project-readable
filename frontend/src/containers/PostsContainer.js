import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, sortPosts, sendVote } from '../actions';
import { getVisiblePosts } from '../selectors';
import Posts from '../components/Posts';

class PostsContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  handleReorder = (criterion) => {
    const { dispatch } = this.props;
    dispatch(sortPosts(criterion));
  }

  handleVote = (postId, vote) => {
    const { dispatch } = this.props;
    dispatch(sendVote(postId, vote));
  }

  render() {
    const { posts } = this.props;
    return (
      <Posts
        posts={posts}
        onReorder={this.handleReorder}
        onVote={this.handleVote}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  posts: getVisiblePosts(state, ownProps)
});

export default connect(mapStateToProps)(PostsContainer);

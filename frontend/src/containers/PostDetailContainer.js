import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendVote } from '../actions';
import { fetchPostDetailIfNeeded } from '../actions';
import Post from '../components/Post';

/**
 * A container component to fetch the post if needed. Only mounts the Post
 * Component if the post is available in the store.
 * TODO: should loads comments here too
 */
class PostDetailContainer extends Component {

  componentDidMount() {
    const { dispatch, post } = this.props;
    dispatch(fetchPostDetailIfNeeded(post.id));
  }

  handleVote = (vote) => {
    const { dispatch, post } = this.props;
    dispatch(sendVote(post.id, vote));
  }

  render() {
    const { post } = this.props;
    const { isFetching } = post;
    return isFetching ? (
      <h2>Loading...</h2>
    ) : (
      <Post {...post} onVote={this.handleVote} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { postId } = ownProps;
  const { posts } = state;
  const post = posts.byId[postId] || {
    id: postId,
    isFetching: true
  };
  return {
    post
  };
};

export default connect(mapStateToProps)(PostDetailContainer);

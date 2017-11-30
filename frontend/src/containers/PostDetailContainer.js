import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchPostDetailIfNeeded } from '../actions';
import PostSummary from '../components/PostSummary';

class PostDetailContainer extends Component {

  componentDidMount() {
    const { dispatch, postId } = this.props;
    // dispatch(fetchPostDetailIfNeeded(postId));
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return null;
    }
    return (
      <div>
        <PostSummary post={post} />
      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { postId } = ownProps;
  return {
    postId,
    post: state.posts.byId[postId] || {}
  };
};

export default connect(mapStateToProps)(PostDetailContainer);

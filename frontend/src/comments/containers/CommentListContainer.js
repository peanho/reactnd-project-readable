import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, sendVote } from '../actions';
import CommentList from '../components/CommentList';

class CommentListContainer extends Component {

  componentDidMount() {
    const { dispatch, shouldFetchComments, postId } = this.props;
    shouldFetchComments && dispatch(fetchComments(postId));
  }

  handleVote = (commentId, vote) => {
    const { dispatch } = this.props;
    dispatch(sendVote(commentId, vote))
  }

  render() {
    const { comments } = this.props;
    return (
      <CommentList comments={comments} onVote={this.handleVote} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { postId } = ownProps;
  const post = state.posts.byId[postId];
  const { commentCount, comments = [] } = post;
  const shouldFetchComments = commentCount !== comments.length;
  return {
    shouldFetchComments,
    postId,
    comments: getComments(state, comments)
  };
}

const getComments = (state, ids) => {
  const { comments } = state;
  return ids.map(id => comments.byId[id]);
}

export default connect(mapStateToProps)(CommentListContainer);
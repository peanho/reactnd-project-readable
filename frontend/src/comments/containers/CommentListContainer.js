import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllIfNeeded } from '../actions'
import { getAllByPostId } from '../selectors'
import CommentList from '../components/CommentList'

class CommentListContainer extends Component {

  componentDidMount() {
    const { dispatch, postId } = this.props;
    dispatch(loadAllIfNeeded(postId));
  }

  render() {
    const { comments } = this.props;
    return (
      <CommentList comments={comments} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { postId: parentId } = ownProps;
  return {
    comments: getAllByPostId(state, { parentId })
  }
}

export default connect(mapStateToProps)(CommentListContainer);

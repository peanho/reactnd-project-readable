import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { doVote, remove } from '../actions'
import Comment from '../components/Comment'

class CommentWithActions extends Component {

  handleRemove = () => {
    const { dispatch, comment } = this.props
    dispatch(remove(comment.id))
  }

  handleVote = vote => {
    const { dispatch, comment } = this.props
    dispatch(doVote(comment.id, vote))
  }

  render() {
    const { comment, match } = this.props
    return (
      <Comment
        comment={comment}
        baseUrl={match.url}
        onRemove={this.handleRemove}
        onVote={this.handleVote}
      />
    )
  }
}

export default withRouter(connect()(CommentWithActions))
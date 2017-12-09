import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doVote, remove } from '../actions'
import Post from '../components/Post'

class PostWithActions extends Component {

  handleRemove = () => {
    const { dispatch, post } = this.props
    dispatch(remove(post.id))
  }

  handleVote = vote => {
    const { dispatch, post } = this.props
    dispatch(doVote(post.id, vote))
  }

  render() {
    return (
      <Post { ...this.props }
        onRemove={this.handleRemove}
        onVote={this.handleVote}
      />
    )
  }
}

export default connect()(PostWithActions)
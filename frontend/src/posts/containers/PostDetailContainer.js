import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostDetailIfNeeded, sendVote } from '../actions'
import PostDetail from '../components/PostDetail'

class PostDetailContainer extends Component {

  componentDidMount() {
    const { dispatch, post } = this.props
    dispatch(fetchPostDetailIfNeeded(post.id))
  }

  handleVote = vote => {
    const { dispatch, post } = this.props
    dispatch(sendVote(post.id, vote))
  }

  render() {
    const { post } = this.props
    const { isFetching } = post
    return isFetching ? (
      <h2>Loading...</h2>
    ) : (
      <PostDetail post={post} onVote={this.handleVote} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps
  const { posts } = state
  const post = posts.byId[id] || {
    id,
    isFetching: true
  }
  return {
    post
  }
}

export default connect(mapStateToProps)(PostDetailContainer)

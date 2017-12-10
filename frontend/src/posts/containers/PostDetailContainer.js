import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadIfNeeded, doVote } from '../actions'
import PostDetail from '../components/PostDetail'

class PostDetailContainer extends Component {

  componentDidMount() {
    const { dispatch, post } = this.props
    dispatch(loadIfNeeded(post.id))
  }

  render() {
    const { post, children } = this.props
    const { isFetching } = post
    return isFetching ? (
      <h2>Loading...</h2>
    ) : (
      <PostDetail post={post} children={children} />
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

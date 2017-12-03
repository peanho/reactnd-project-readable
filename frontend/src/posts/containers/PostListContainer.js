import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchPosts, sortPosts, sendVote } from '../actions'
import { getSortedPosts } from '../selectors'
import PostList from '../components/PostList'

class PostListContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPosts())
  }

  handleSort = sortBy => {
    const { dispatch } = this.props
    dispatch(sortPosts(sortBy))
  }

  handleVote = (postId, vote) => {
    const { dispatch } = this.props
    dispatch(sendVote(postId, vote))
  }

  render() {
    const { posts } = this.props;
    return (
      <PostList
        posts={posts}
        onSort={this.handleSort}
        onVote={this.handleVote}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  posts: getSortedPosts
})

export default connect(mapStateToProps)(PostListContainer);

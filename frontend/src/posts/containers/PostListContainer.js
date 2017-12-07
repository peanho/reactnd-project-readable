import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { loadAll, sortBy, doVote } from '../actions'
import { getAllSorted } from '../selectors'
import PostList from '../components/PostList'

class PostListContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadAll())
  }

  handleSort = criterion => {
    const { dispatch } = this.props
    dispatch(sortBy(criterion))
  }

  handleVote = (postId, vote) => {
    const { dispatch } = this.props
    dispatch(doVote(postId, vote))
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
  posts: getAllSorted
})

export default connect(mapStateToProps)(PostListContainer);

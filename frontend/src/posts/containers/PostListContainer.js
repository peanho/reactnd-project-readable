import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { loadAll, sortBy } from '../actions'
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

  render() {
    const { isLoading, posts } = this.props
    return (
      <PostList
        isLoading={isLoading}
        posts={posts}
        onSort={this.handleSort}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  posts: getAllSorted
})

export default connect(mapStateToProps)(PostListContainer);

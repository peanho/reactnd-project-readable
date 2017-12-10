import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostList } from '../../posts'
import CategoryList from '../../categories'

const RootView = props => {
  const { selectedCategory, isLoading } = props
  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-2">
        <span className="navbar-brand">Posts</span>
        <Link className="btn btn-primary" to="/posts-new">ADD</Link>
      </nav>
      <div className="row">
        <div className="col-10">
          <PostList categoryFilter={selectedCategory} isLoading={isLoading} />
        </div>
        <div className="col">
          <CategoryList selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { category: selectedCategory } = ownProps.match.params
  const { root } = state.views
  const { isLoading } = root.posts || { isLoading: true } // change for true on first mount
  return {
    selectedCategory,
    isLoading
  }
}

export default connect(mapStateToProps)(RootView)
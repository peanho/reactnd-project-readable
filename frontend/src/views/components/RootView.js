import React from 'react'
import { Link } from 'react-router-dom'
import { PostList } from '../../posts'
import CategoryList from '../../categories'

const RootView = props => {
  const { category } = props.match.params
  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-2">
        <span className="navbar-brand">Posts</span>
        <Link className="btn btn-primary" to="/posts-new">ADD</Link>
      </nav>
      <div className="row">
        <div className="col-10">
          <PostList categoryFilter={category} />
        </div>
        <div className="col">
          <CategoryList selectedCategory={category} />
        </div>
      </div>
    </div>
  )
}

export default RootView
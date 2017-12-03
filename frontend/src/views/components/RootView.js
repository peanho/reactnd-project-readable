import React from 'react'
import { PostList } from '../../posts'
import CategoryList from '../../categories'

const RootView = props => {
  const { category } = props.match.params
  return (
    <div className="row">
      <div className="col-8">
        <PostList categoryFilter={category} />
      </div>
      <div className="col-4">
        <CategoryList selectedCategory={category} />
      </div>
    </div>
  )
}

export default RootView

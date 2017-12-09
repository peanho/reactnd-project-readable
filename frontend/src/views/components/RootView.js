import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostList } from '../../posts'
import CategoryList from '../../categories'

class RootView extends Component {

  render() {
    const { selectedCategory } = this.props
    return (
      <div>
        <nav className="navbar navbar-light bg-light mb-2">
          <span className="navbar-brand">Posts</span>
          <Link className="btn btn-primary" to="/posts-new">ADD</Link>
        </nav>
        <div className="row">
          <div className="col-10">
            <PostList categoryFilter={selectedCategory} />
          </div>
          <div className="col">
            <CategoryList selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { category } = ownProps.match.params;
  return {
    selectedCategory: category
  }
}

export default connect(mapStateToProps)(RootView)
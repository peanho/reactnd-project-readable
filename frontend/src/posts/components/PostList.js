import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../containers/PostWithActions'
import SortControl from '../../components/SortControl'

const PostList = props => {
  const { posts, onSort } = props
  return (
    <div className="row">
      <div className="col">
        <div className="d-flex justify-content-end p-2">
          <SortControl onSort={onSort} />
        </div>
        {posts.map(post => (
          <div key={post.id} className="p-2">
            <Post post={post}>
              <Link 
                className="card-link btn btn-outline-primary btn-sm"
                to={`/${post.category}/${post.id}`}
              >
                VIEW
              </Link>
            </Post>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList;

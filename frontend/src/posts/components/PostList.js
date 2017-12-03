import React from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import Voter from '../../components/Voter'
import SortControl from '../../components/SortControl'

const PostList = props => {
  const { posts, onSort, onVote } = props
  const handleVote = postId => vote => onVote(postId, vote)
  return (
    <div className="row p-2">
      <div className="col">
        <SortControl onSort={onSort} />
        {posts.map(post => (
          <div key={post.id} className="row p-2">
            <div className="col-1">
              <Voter score={post.voteScore} onVote={handleVote(post.id)} />
            </div>
            <div className="col">
              <Post {...post}>
                <Link className="card-links" to={`/${post.category}/${post.id}`}>VIEW</Link>
              </Post>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList;

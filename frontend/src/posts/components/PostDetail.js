import React from 'react';
import { CommentList } from '../../comments'
import Post from '../containers/PostWithActions'

/**
 * TODO: change status to deleting and render a 
 * @param {*Object} props 
 */
const PostDetail = props => {
  const { post } = props
  const { id, body } = post
  return (
    <div className="row">
      <div className="col">
        <Post post={post}>
          <p className="card-text">{body}</p>
        </Post>
        <div className="row">
          <div className="col offset-1">
            <div className="row mt-2">
              <div className="col">
                {props.children}
              </div>
            </div>
            <CommentList postId={id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail

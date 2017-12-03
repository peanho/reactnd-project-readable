import React from 'react';
import Voter from '../../components/Voter'
import { CommentList } from '../../comments'
import Post from './Post'

const PostDetail = props => {
  const { post, onVote } = props;
  return (
    <div className="row">
      <div className="col">
        <div className="row p-2">
          <div className="col-1">
            <Voter score={post.voteScore} onVote={onVote} />
          </div>
          <div className="col">
            <Post {...post}>
              <div>{post.body}</div>
            </Post>
            <CommentList postId={post.id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail

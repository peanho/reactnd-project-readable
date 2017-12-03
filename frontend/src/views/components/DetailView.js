import React from 'react'
import { PostDetail } from '../../posts'

const DetailView = props => {
  const { postId } = props.match.params;
  return (
    <div className="row">
      <div className="col">
        <PostDetail id={postId} />
      </div>
    </div>
  )
}

export default DetailView;

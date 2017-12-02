import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer';

const PostDetailView = props => {
  const { post_id: postId } = props.match.params;
  return (
    <div className="row">
      <div className="col">
        <PostDetailContainer postId={postId} />
      </div>
    </div>
  );
};

export default PostDetailView;

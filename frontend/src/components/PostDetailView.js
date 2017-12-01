import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer';

const PostDetailView = props => {
  const { post_id: postId } = props.match.params;
  return (
    <div>
      <PostDetailContainer postId={postId} />
    </div>
  );
};

export default PostDetailView;

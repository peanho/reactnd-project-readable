import React from 'react';
import { Link } from 'react-router-dom';

const PostSummary = props => {
  const { post } = props;
  const { title, author, commentCount } = post;
  return (
    <div>
      <div>
        <Link to={`/${post.category}/${post.id}`}>{title}</Link>
      </div>
      <div>{author} &bull; {commentCount} comments</div>
    </div>
  );
};

export default PostSummary;

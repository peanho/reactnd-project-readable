import React from 'react';
import PropTypes from 'prop-types';

function Posts({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <div>{post.voteScore}</div>
          <div>{post.title}</div>
          <div>
            <span>{post.author}</span>
            <span> - </span>
            <span>{post.commentCount} comments</span>
          </div>
        </div>
      ))}
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts;

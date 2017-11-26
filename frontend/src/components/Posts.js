import React from 'react';
import PropTypes from 'prop-types';

function Posts(props) {
  const { posts, onSortCriteriaSelected } = props;
  return (
    <div>
      <div>
        <select onChange={e => onSortCriteriaSelected(e.target.value)}>
          <option value="NONE" disabled>none</option>
          <option value="TOP">top</option>
          <option value="NEW">new</option>
          <option value="TRENDING">trending</option>
        </select>
      </div>
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
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  onSortCriteriaSelected: PropTypes.func.isRequired
}

export default Posts;

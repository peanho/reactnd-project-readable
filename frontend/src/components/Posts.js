import React from 'react';
import PropTypes from 'prop-types';
import Voter from './Voter';

const Posts = props => {
  const { posts, onReorder, onVote } = props;
  const handleReorder = event => onReorder(event.target.value);
  const handleVote = postId => vote => onVote(postId, vote);
  return (
    <div>
      <div>
        <select onChange={handleReorder}>
          <option value="TOP">top</option>
          <option value="NEW">new</option>
          <option value="TRENDING">trending</option>
        </select>
      </div>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <Voter
              score={post.voteScore}
              onVote={handleVote(post.id)}
            />
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

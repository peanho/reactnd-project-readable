import React from 'react';
import PropTypes from 'prop-types';
import SortControl from './SortControl';
import Post from './Post';

const PostsList = props => {
  const { posts, onReorder, onVote } = props;
  const handleReorder = event => onReorder(event.target.value);
  const handleVote = postId => vote => onVote(postId, vote);
  return (
    <div className="col-10">
      <div className="row p-2">
        <div className="col">
          <SortControl onChange={handleReorder} />
        </div>
      </div>
      <div className="row p-2">
        <div className="col">
          {posts.map(post => (
            <Post
              key={post.id}
              onVote={handleVote}
              onReorder={handleReorder}
              {...post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  onReorder: PropTypes.func.isRequired,
  onVote: PropTypes.func.isRequired
}

export default PostsList;

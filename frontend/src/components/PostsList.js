import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SortControl from './SortControl';
import PostSummary from './PostSummary';
import Voter from './Voter';

const PostsList = props => {
  const { posts, onReorder, onVote } = props;
  const handleReorder = event => onReorder(event.target.value);
  const handleVote = postId => vote => onVote(postId, vote);
  return (
    <div className="row p-2">
      <div className="col">
        <SortControl onChange={handleReorder} />
        {posts.map(post => (
          <div key={post.id} className="row p-2">
            <div className="col-1">
              <Voter score={post.voteScore} onVote={handleVote(post.id)} />
            </div>
            <div className="col-11">
              <PostSummary {...post}>
                <Link className="btn btn-link" to={`/${post.category}/${post.id}`}>VIEW</Link>
                <button type="button" className="btn btn-link">EDIT</button>
                <button type="button" className="btn btn-link">DELETE</button>
              </PostSummary>
            </div>
          </div>
        ))}
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

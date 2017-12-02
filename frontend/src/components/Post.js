import React from 'react';
// import { Link } from 'react-router-dom';
import Voter from './Voter';
import CommentListContainer from '../containers/CommentListContainer';

const Post = props => {
  const { onVote } = props;
  const { id, title, author, commentCount, voteScore, timestamp } = props;
  const createdDate = new Date(timestamp).toLocaleString();
  return (
    <div className="row">
      <div className="col">
        <div className="row p-2">
          <div className="col-1">
            <Voter score={voteScore} onVote={onVote} />
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <h6 className="card-subtitle text-muted">
                  {author} &bull; {commentCount} comments &bull; {createdDate}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-2">
          <div className="col">
            <CommentListContainer postId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

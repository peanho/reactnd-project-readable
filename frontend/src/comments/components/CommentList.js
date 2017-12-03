import React from 'react';
import Voter from '../../components/Voter';
import Comment from './Comment';

const CommentList = props => {
  const { comments, onVote } = props;
  const handleVote = commentId => vote => onVote(commentId, vote);
  return (
    <div className="row">
      <div className="col">
        {comments.map(comment => (
          <div key={comment.id} className="row p-2">
            <div className="col-1">
              <Voter score={comment.voteScore} onVote={handleVote(comment.id)} />
            </div>
            <div className="col">
              <Comment {...comment}>

              </Comment>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;

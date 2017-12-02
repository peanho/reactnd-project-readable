import React from 'react';
import Voter from './Voter';
import Comment from './Comment';

const CommentsList = props => {
  const { comments } = props;
  return (
    <div className="row">
      <div className="col">
        {comments.map(comment => (
          <Comment {...comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsList;

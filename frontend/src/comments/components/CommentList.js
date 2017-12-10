import React from 'react';
import Comment from '../containers/CommentWithActions';

const CommentList = props => {
  const { comments } = props;
  return (
    <div className="row">
      <div className="col">
        {comments.map(comment => (
          <div key={comment.id} className="p-2">
            <Comment comment={comment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;

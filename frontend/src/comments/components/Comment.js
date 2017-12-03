import React from 'react';

const Comment = props => {
  const { body, author, timestamp } = props;
  const updatedAt = new Date(timestamp).toLocaleString();
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{body}</h6>
        <h6 className="card-subtitle text-muted">
          {author} &bull; {updatedAt}
        </h6>
      </div>
    </div>
  );
};

export default Comment;

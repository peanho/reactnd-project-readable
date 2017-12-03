import React from 'react';
import { timestampToEllapsedTime } from '../../utils/converters'

const Comment = props => {
  const { body, author, timestamp } = props;
  const ellapsed = timestampToEllapsedTime(Date.now() - timestamp);
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{body}</h6>
        <h6 className="card-subtitle text-muted">
          {author} &bull; {ellapsed}
        </h6>
      </div>
    </div>
  );
};

export default Comment;

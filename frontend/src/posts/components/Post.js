import React from 'react'
import { timestampToEllapsedTime } from '../../utils/converters'

const Post = ( props ) => {
  const { title, author, commentCount, timestamp } = props;
  const ellapsed = timestampToEllapsedTime(Date.now() - timestamp);
  return (
    <div className="card h-100">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <h6 className="card-subtitle text-muted">
          {author} &bull; {ellapsed} &bull; {commentCount} comments
        </h6>
        {props.children}
      </div>
    </div>
  );
};

export default Post;

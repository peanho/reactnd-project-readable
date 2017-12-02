import React from 'react';

const PostSummary = ( props ) => {
  const { title, author, commentCount, timestamp } = props;
  const ellapsed = ellapsedTime(Date.now() - timestamp);
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

const ellapsedTime = ellapsed => {
  if (ellapsed < 1000) {
    return 'now';
  } else if (ellapsed < 60000) {
    return `${Math.trunc(ellapsed / 1000)} seconds ago`;
  } else if (ellapsed < 3600000) {
    return `${Math.trunc(ellapsed / 60000)} minutes ago`;
  } else if (ellapsed < 86400000) {
    return `${Math.trunc(ellapsed / 3600000)} hours ago`;
  } else if (ellapsed < 2073600000) {
    return `${Math.trunc(ellapsed / 86400000)} days ago`;
  } else if (ellapsed < 62208000000) {
    return `${Math.trunc(ellapsed / 2073600000)} months ago`;
  } else {
    return `${Math.trunc(ellapsed / 62208000000)} years ago`;
  }
};

export default PostSummary;

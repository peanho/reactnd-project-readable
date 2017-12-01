import React from 'react';
import { Link } from 'react-router-dom';
import Voter from './Voter';

const Post = props => {
  const { post } = props;
  const { id, title, author, commentCount, voteScore, timestamp, category } = props;
  const ellapsed = ellapsedTime(Date.now() - timestamp);
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <h6 className="card-subtitle text-muted">
          {author} &bull; {ellapsed} &bull; {commentCount} comments</h6>
        <Link to={`/${category}/${id}`}>View More</Link>
      </div>
      {props.children}
    </div>
  );
}

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
}

export default Post;

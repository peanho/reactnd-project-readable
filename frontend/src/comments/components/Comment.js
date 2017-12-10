import React from 'react';
import { Link } from 'react-router-dom'
import Voter from '../../components/Voter'
import { timestampToEllapsedTime } from '../../utils/converters'

const Comment = props => {
  const { comment, onVote, onRemove, baseUrl, className = ""} = props
  const { id, body, author, timestamp, voteScore } = comment
  const ellapsed = timestampToEllapsedTime(Date.now() - timestamp)
  return (
    <div className={`row align-items-stretch ${className}`}>
      <div className="col-1">
        <Voter className="h-100 d-flex flex-column justify-content-around" score={voteScore} onVote={onVote} />
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{body}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {author} &bull; {ellapsed}
          </h6>
            {props.children}
            <Link
              to={`${baseUrl}/comments-edit/${id}`}
              className="card-link btn btn-outline-info btn-sm"
            >
              EDIT
            </Link>
            <button type="button" className="card-link btn btn-outline-danger btn-sm" to="/" onClick={onRemove}>DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

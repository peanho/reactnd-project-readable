import React from 'react';

function Voter(props) {
  const { score, onVote } = props;
  const handleVote = vote => e => onVote(vote);
  return (
    <div className="d-flex">
      <button onClick={handleVote('upVote')}>Vote UP</button>
      <span> {score} </span>
      <button onClick={handleVote('downVote')}>Vote DOWN</button>
    </div>
  );
}

export default Voter;

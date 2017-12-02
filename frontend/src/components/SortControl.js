import React from 'react';

const SortControl = props => {
  const { onChange } = props;
  return (
    <select className="custom-select" onChange={onChange}>
      <option value="TOP">top</option>
      <option value="NEW">new</option>
      <option value="TRENDING">trending</option>
    </select>
  );
}

export default SortControl;

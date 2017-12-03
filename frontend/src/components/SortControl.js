import React from 'react';

const SortControl = props => {
  const { onSort } = props;
  const handleChange = event => onSort(event.target.value)
  return (
    <select className="custom-select" onChange={handleChange}>
      <option value="TOP">top</option>
      <option value="NEW">new</option>
      <option value="TRENDING">trending</option>
    </select>
  );
}

export default SortControl;

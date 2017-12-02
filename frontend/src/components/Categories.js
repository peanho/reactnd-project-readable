import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Categories( props ) {
  const { categories } = props;
  return (
    <div>
      <div>
        <Link to="/">all</Link>
      </div>
      {categories.map(category => (
        <div key={category.name}>
          <Link to={category.path}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Categories;

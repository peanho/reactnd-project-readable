import React from 'react';
import PostsContainer from '../containers/PostsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';

const PostListView = (props) => {
  const { category = 'ALL_CATEGORIES' } = props.match.params;
  return (
    <div>
      <div><PostsContainer categoryFilter={category} /></div>
      <div><CategoriesContainer selectedCategory={category} /></div>
    </div>
  );
}

export default PostListView;

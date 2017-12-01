import React from 'react';
import PostsContainer from '../containers/PostsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';

const PostListView = (props) => {
  const { category = 'ALL_CATEGORIES' } = props.match.params;
  return (
    <div className="row">
      <PostsContainer categoryFilter={category} />
      <CategoriesContainer selectedCategory={category} />
    </div>
  );
}

export default PostListView;

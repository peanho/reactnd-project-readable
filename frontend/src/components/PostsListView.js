import React from 'react';
import PostsContainer from '../containers/PostsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';

const PostListView = (props) => {
  const { category = 'ALL_CATEGORIES' } = props.match.params;
  return (
    <div className="row">
      <div className="col-10">
        <PostsContainer categoryFilter={category} />
      </div>
      <div className="col">
        <CategoriesContainer selectedCategory={category} />
      </div>
    </div>
  );
}

export default PostListView;

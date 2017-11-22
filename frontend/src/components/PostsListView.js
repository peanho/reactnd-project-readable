import React from 'react';
import PostsContainer from '../containers/PostsContainer';
// import CategoriesContainer from '../containers/CategoriesContainer';

function PostListView( { match: { params } } ) {
  const category = params.category;
  return (
    <div>
      <div><PostsContainer categoryFilter={category} /></div>
      {/* <div><CategoriesContainer selectedCategory={category} /></div> */}
    </div>
  );
}

export default PostListView;

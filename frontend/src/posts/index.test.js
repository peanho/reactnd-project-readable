import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  requestPosts,
  receivePosts
} from './postsActions';

describe('actions', () => {
  it('should create an action to request all posts', () => {
    const expectedAction = {
      type: REQUEST_POSTS
    };
    expect(requestPosts()).toEqual(expectedAction);
  });
  it('should create an action to receive all posts', () => {
    const posts = [];
    const expectedAction = {
      type: RECEIVE_POSTS,
      posts
    };
    expect(receivePosts(posts)).toEqual(expectedAction);
  });
});

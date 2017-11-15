import { postsReducer } from './postsReducer';
import { RECEIVE_POSTS } from '../actions';

describe('posts reducer', () => {
  it('should return the initial state of the posts reducer slice', () => {
    expect(postsReducer(undefined, {})).toEqual({
      byId: {},
      allIds: []
    });
  });
  it('should handle RECEIVE_POSTS', () => {
    expect(
      postsReducer({}, {
        type: RECEIVE_POSTS,
        posts: [{"id": "8xf0y6ziyjabvozdd253nd"}]
      })
    ).toEqual({
      byId: {
        "8xf0y6ziyjabvozdd253nd": {"id": "8xf0y6ziyjabvozdd253nd"}
      },
      allIds: ["8xf0y6ziyjabvozdd253nd"]
    });
    expect(
      postsReducer(
        {
          byId: {
            "8xf0y6ziyjabvozdd253nd": {"id": "8xf0y6ziyjabvozdd253nd"}
          },
          allIds: ["8xf0y6ziyjabvozdd253nd"]
        },
        {
          type: RECEIVE_POSTS,
          posts: [{"id": "6ni6ok3ym7mf1p33lnez"}]
        }
      )
    ).toEqual({
      byId: {
        "6ni6ok3ym7mf1p33lnez": {"id": "6ni6ok3ym7mf1p33lnez"}
      },
      allIds: ["6ni6ok3ym7mf1p33lnez"]
    });
  });
});

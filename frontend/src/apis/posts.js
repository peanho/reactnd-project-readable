import { api, headers } from './index';

const resource = `${api}/posts`;

/**
 * Gets all posts
 * GET /posts
 */
export const getAll = () =>
  fetch(resource, { headers })
    .then(res => res.json());

/**
 * Votes on post
 * POST /posts/:id
 */
export const post = (postId, vote) =>
  fetch(`${resource}/${postId}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({option: vote})
  })
    .then(res => res.json());

/**
 * Gets all commnents on post
 * GET /posts/:id/comments
 */
export const getComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(enhanceWithParentId(postId));

const enhanceWithParentId = parentId => comments => ({
  parentId,
  comments
});

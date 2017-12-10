import { api, headers } from './index';
import { guid } from '../utils/helpers';

const resource = `${api}/comments`;

/**
 * Gets a single comment
 * GET /comments/:id
 */
export const getOne = commentId =>
  fetch(resource, { headers })
    .then(res => res.json())

/**
 * Creates a comment on the server
 * @param {*Object} comment 
 */
export const create = comment => {
  comment.id = guid()
  return fetch(resource, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(comment)
  })
  .then(res => res.json())
}

/**
 * Post a vote on a comment
 * POST /comments/:id
 */
export const vote = (commentId, option) =>
  fetch(`${resource}/${commentId}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ option })
  })
  .then(res => res.json());

/**
 * Updates the comment on the server
 * PUT /comments/:id
 */
export const update = comment =>
  fetch(`${resource}/${comment.id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(comment)
  })
  .then(res => res.json());

/**
 * Deletes the comment on the server
 * DELETE /comments/:id
 */
export const remove = commentId =>
  fetch(`${resource}/${commentId}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  })
  .then(res => res.json())

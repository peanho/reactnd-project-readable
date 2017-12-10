import { api, headers } from './'
import { guid } from '../utils/helpers'

const resource = `${api}/posts`

/**
 * Gets all posts
 * GET /posts
 */
export const getAll = () =>
  fetch(resource, { headers })
    .then(res => res.json())

/**
 * Retrieve posts with id
 * GET /posts/:id
 * @param {*number} id 
 */
export const getOne = id =>
  fetch(`${resource}/${id}`, { headers })
    .then(res => res.json())

/**
 * Create a post on the server
 * POST /posts
 * @param {*Object} post - The post to be created
 */
export const create = post => {
  post.id = guid()
  return fetch(resource, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(post)
  })
  .then(res => res.json())
}

/**
 * Updates a post on the server
 * PUT /posts/:id
 * @param {*Object} post 
 */
export const update = post => {
  const { id } = post;
  return fetch(`${resource}/${id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(post)
  })
  .then(res => res.json())
}

/**
 * Deletes a post on the server
 * DELETE /posts/:id
 * @param {*number} id 
 */
export const remove = id =>
  fetch(`${resource}/${id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  })
  .then(res => res.json())

/**
 * Updates post with voteUp or voteDown
 * POST /posts/:id
 */
export const vote = (id, vote) =>
  fetch(`${resource}/${id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({option: vote})
  })
    .then(res => res.json())

/**
 * Gets all comments on post
 * GET /posts/:id/comments
 */
export const getComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(enhanceWithParentId(postId))

const enhanceWithParentId = parentId => comments => ({
  parentId,
  comments
})

import { api, headers } from './index';

export const getAll = () =>
  fetch(`${api}/categories`, { headers })
  .then(res => res.json());

export const getPosts = () =>
  fetch(`${api}/categories`, { headers })
  .then(res => res.json());

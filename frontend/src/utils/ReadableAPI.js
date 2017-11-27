const api = "http://localhost:3001";

const headers = {
  'Accept': 'application/json',
  'Authorization': 'peanho-beta'
};

const throwOnError = (response) => {
  if (!response.ok) throw new Error(response.statusText);
  return response;
};

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(throwOnError)
    .then(res => res.json());

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(throwOnError)
    .then(res => res.json());

export const postVote = (postId, vote) =>
  fetch(`${api}/posts/${postId}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({option: vote})
  })
    .then(throwOnError)
    .then(res => res.json());

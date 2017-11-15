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
    .then(handleErrors)
    .then(res => res.json());

export const getCategories = () =>
  fetch(`${api}/categorie`, { headers })
    .then(handleErrors)
    .then(res => res.json());

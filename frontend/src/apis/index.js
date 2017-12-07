export const api = "http://localhost:3001";

export const headers = {
  'Accept': 'application/json',
  'Authorization': 'peanho-alfa'
};

export const throwOnError = (response) => {
  if (!response.ok) throw new Error(response.statusText);
  return response;
};

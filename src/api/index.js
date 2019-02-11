const API_BASE = 'https://dev-api.danielwellington.com/frontend';

const fetchByUrl = url =>
  fetch(url)
    .then(response => response.json())
    .catch(error => console.error('ERROR', error));

export const products = (id = '') => fetchByUrl(`${API_BASE}/products/${id}`);
export const assets = (id = '') => fetchByUrl(`${API_BASE}/assets/${id}`);

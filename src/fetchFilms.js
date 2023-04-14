const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b'
const searchParams = new URLSearchParams({
 
  api_key: '1962278b5026dd7c7bb0a91cd47f798b',
});

export function fetchFilms() {
  const url = `${BASE_URL}?${searchParams}`;
    return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

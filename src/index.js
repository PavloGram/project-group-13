import { fetchFilms } from './fetchFilms.js';
const BASE_URL_TRENDS = 'https://api.themoviedb.org/3/trending/all/day';
const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';

const inputEl = document.querySelector('.input');

const searchParamsToTrends = new URLSearchParams({
  api_key: '1962278b5026dd7c7bb0a91cd47f798b',
});

popularFilms();
function popularFilms() {
  const url = `${BASE_URL_TRENDS}?${searchParamsToTrends}`;
  fetchFilms(url)
    .then(forMarcup => {
      console.log(forMarcup);
      // forMarcup це масив об’єктів популярних фільмів
    })
    .catch(er => {
      cvonsole.log(er);
    });
}

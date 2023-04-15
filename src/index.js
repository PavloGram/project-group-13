import { fetchFilms } from './fetchFilms.js';
import './spinner'
const BASE_URL_TRENDS = 'https://api.themoviedb.org/3/trending/all/day';
const BASE_URL_QUERY = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';

const inputEl = document.querySelector('.input');
const spinnerEl = document.querySelector('.preloader__image')

inputEl.addEventListener('input', inputQuery);

function inputQuery(e) {
  const input = e.target.value.trim();

  const searchParamsToQuery = new URLSearchParams({
    api_key: '1962278b5026dd7c7bb0a91cd47f798b',
    query: input,
  });
  const url = `${BASE_URL_QUERY}?${searchParamsToQuery}`;
  fetchFilms(url)
    .then(forMarcup => {
      console.log(forMarcup);
      // forMarcup це масив об’єктів фільмів за запитом
    })
    .catch(er => {
      console.log(er);
    });
}

// <-------------- керування спінером ----------
// <---------------клас is-hidden в файлі spinner.scss------------->
function removeSpinner(){
  spinnerEl.classList.remove('is-hidden')
}
function addSpinner(){
  spinnerEl.classList.remove('is-hidden')
}


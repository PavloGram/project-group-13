// import { fetchFilms } from './fetchFilms.js';
import { renderMarkup } from './render-markup';
import inputError from './input-error';


const BASE_URL_QUERY = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';

const formEl = document.querySelector('.search');
const spinnerEl = document.querySelector('.preloader__image');
const inputErrEl = document.querySelector('.error-input ');

formEl.addEventListener('submit', inputQuery);

let value = '';
let totalResults = 0;

function inputQuery(e) {
  e.preventDefault()
  value = value = e.currentTarget.search.value.trim();

  if (value === '') {
    return inputErrEl.classList.add('is-hidden');
  }

  const searchParamsToQuery = new URLSearchParams({
    api_key: '1962278b5026dd7c7bb0a91cd47f798b',
    query: value,
    page: 1,
  });
  const url = `${BASE_URL_QUERY}?${searchParamsToQuery}`;
  fetchFilms(url)
    .then(forMarcup => {
      totalResults = forMarcup.total_results;
      console.log(forMarcup)
      renderMarkup(forMarcup);
      inputError(totalResults);

      // return console.log(totalResults);
    })
    .catch(er => {
      console.log(er);
    });
}

function moreFilms(count) {
  const searchParamsToQuery = new URLSearchParams({
    api_key: '1962278b5026dd7c7bb0a91cd47f798b',
    query: value,
    page: count,
  });
  const url = `${BASE_URL_QUERY}?${searchParamsToQuery}`;
  fetchFilms(url)
    .then(forMarcup => {
      // return console.log(totalResults);
    })
    .catch(er => {
      console.log(er);
    });
}

function fetchFilms(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}


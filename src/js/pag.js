import Pagination from 'tui-pagination';
import { renderMarkup } from './render-markup';
import inputError from './input-error';

const blockPag = document.getElementById('tui-pagination-container-search');
// const searchPagination = document.querySelector('.search-pagination')
// const basicPagination = document.querySelector('.tui-pagination')
// console.log(basicPagination)

const pagination = new Pagination(blockPag, { visiblePages: 5 });

const BASE_URL_QUERY = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';

const formEl = document.querySelector('.search');
const spinnerEl = document.querySelector('.preloader__image');
const inputErrEl = document.querySelector('.error-input ');

formEl.addEventListener('submit', inputQuery);

let value = '';
let totalResults = 0;

function inputQuery(e) {
  e.preventDefault();
  value = e.currentTarget.search.value.trim();

  if (value === '') {
           basicPagination.classList.add('is-hidden');
    return inputErrEl.classList.add('is-hidden');
  }

  searchFilms(value);
}

function searchFilms(value, page) {
  if (page === undefined) {
    page = 1;
  }
  const searchParamsToQuery = new URLSearchParams({
    api_key: '1962278b5026dd7c7bb0a91cd47f798b',
    query: value,
    page: page,
  });
  const url = `${BASE_URL_QUERY}?${searchParamsToQuery}`;
  fetchFilms(url)
    .then(data => {
      totalResults = data.total_results;
      renderMarkup(data);
      inputError(totalResults);
      if (page === 1) {
        pagination.setTotalItems(totalResults);
        pagination.setItemsPerPage(data.results.length);
        pagination.reset();
      }

      // return console.log(totalResults);
    })
    .catch(er => {
      console.log(er);
    });
}

pagination.on('beforeMove', evt => {
  const { page } = evt;

  searchFilms(value, page);
});

function fetchFilms(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

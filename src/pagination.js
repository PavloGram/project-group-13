// import { fetchFilms } from './fetchFilms.js';
const BASE_URL_TRENDS = 'https://api.themoviedb.org/3/trending/all/day';
const BASE_URL_QUERY = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';

const inputEl = document.querySelector('.input');
const spinnerEl = document.querySelector('.preloader__image');

inputEl.addEventListener('input', inputQuery);
let pageCounter = 1;
let value = ''

function inputQuery(e) {
 value = e.target.value.trim();

  const searchParamsToQuery = new URLSearchParams({
    api_key: '1962278b5026dd7c7bb0a91cd47f798b',
    query: value,
    page: pageCounter,
  });
  const url = `${BASE_URL_QUERY}?${searchParamsToQuery}`;
     fetchFilms(url)
    .then(forMarcup => {

          return      console.log(forMarcup);
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









const paginationContainer = document.querySelector('.pagination');
const paginationButtons =
paginationContainer.querySelectorAll('.pagination-btn');
const previousButton = paginationContainer.querySelector('.previous-btn');
const nextButton = paginationContainer.querySelector('.next-btn');
const endButton = paginationContainer.querySelector('.end-btn');
const nextDotsButton = paginationContainer.querySelector('.next-dots');

let currentPage = 1;
const totalPages = paginationButtons.length - 2;


function displayCurrentPage() {
  paginationButtons.forEach(button => {
    button.classList.remove('active-pagination');
    if (button.innerText == currentPage) {
      button.classList.add('active-pagination');
    }
  });
}

paginationButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText != '...' && currentPage != button.innerText) {
      currentPage = parseInt(button.innerText);
      displayCurrentPage();
    }
  });
});

previousButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayCurrentPage();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayCurrentPage();
  }
});

endButton.addEventListener('click', () => {
  if (currentPage != totalPages) {
    currentPage = totalPages;
    displayCurrentPage();
  }
});

nextDotsButton.addEventListener('click', () => {
  if (currentPage < totalPages - 2) {
    currentPage += 3;
    displayCurrentPage();
  } else {
    currentPage = totalPages;
    displayCurrentPage();
  }
});

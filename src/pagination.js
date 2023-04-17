// import { fetchFilms } from './fetchFilms.js';
import { renderMarkup } from './js/render-markup';
const BASE_URL_TRENDS = 'https://api.themoviedb.org/3/trending/all/day';
const BASE_URL_QUERY = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';

const inputEl = document.querySelector('.search__input');
const spinnerEl = document.querySelector('.preloader__image');

inputEl.addEventListener('input', inputQuery);

let value = '';
// в totalResults буде записана загальна кількість об’єктів які прийшли з бекенду щоб розрахувати кількість сторінок
let totalResults = 0;

function inputQuery(e) {
  value = e.target.value.trim();

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
    })
    .catch(er => {
      console.log(er);
    });
}
// <----------функція яка викликається при натисканні на кнопки пагінації 
// в count має передаватися номер сторінки яка має бути завантажена і намальована------->
function moreFilms(count){
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


// <----------------->

// const paginationContainer = document.querySelector('.pagination');
// const paginationButtons =
//   paginationContainer.querySelectorAll('.pagination-btn');
// const previousButton = paginationContainer.querySelector('.previous-btn');
// const nextButton = paginationContainer.querySelector('.next-btn');
// const endButton = paginationContainer.querySelector('.end-btn');
// const nextDotsButton = paginationContainer.querySelector('.next-dots');

// let currentPage = 1;
// const totalPages = paginationButtons.length - 2;

// function displayCurrentPage() {
//   paginationButtons.forEach(button => {
//     button.classList.remove('active-pagination');
//     if (button.innerText == currentPage) {
//       button.classList.add('active-pagination');
//     }
//   });
// }

// paginationButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     if (button.innerText != '...' && currentPage != button.innerText) {
//       currentPage = parseInt(button.innerText);
//       displayCurrentPage();
//     }
//   });
// });

// previousButton.addEventListener('click', () => {
//   if (currentPage > 1) {
//     currentPage--;
//     displayCurrentPage();
//   }
// });

// nextButton.addEventListener('click', () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     displayCurrentPage();
//   }
// });

// endButton.addEventListener('click', () => {
//   if (currentPage != totalPages) {
//     currentPage = totalPages;
//     displayCurrentPage();
//   }
// });

// nextDotsButton.addEventListener('click', () => {
//   if (currentPage < totalPages - 2) {
//     currentPage += 3;
//     displayCurrentPage();
//   } else {
//     currentPage = totalPages;
//     displayCurrentPage();
//   }
// });

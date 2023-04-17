// import { fetchFilms } from './fetchFilms.js';
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
      // return console.log(totalResults);
    })
    .catch(er => {
      console.log(er);
    });
}
// <----------функція яка викликається при натисканні на кнопки пагінації
// в count має передаватися номер сторінки яка має бути завантажена і намальована------->
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

// <----------------->

const paginationContainer = document.querySelector('.pagination');
const paginationButtons =
  paginationContainer.querySelectorAll('.pagination-btn');
const nextButton = paginationContainer.querySelector('.next-btn');
const endButton = paginationContainer.querySelector('.end-btn');
const nextDotsButton = paginationContainer.querySelector('.next-dots');

let currentPage = 1;
const totalPages = paginationButtons.length - 2;

const paginationMarkup = () => {
  if (state.totalPages <= 1) return;
  const { pages, hasPrevGroup, hasNextGroup } = paginate(
    state.totalPages,
    state.currentPage
  );
  const firstPage = `<button type="button" class="start-btn pagination-btn">1</button>`;
  const lastPage = `<button type="button" class="end-btn pagination-btn">${state.totalPages}</button>`;
  const prev = `<button type="button" class="pagination-btn"></button>`;
  const next = `<button type="button" class="next-btn pagination-btn"></button>`;
  const dotsBtnPrev = `<button class="pagination-btn">...</button>`;
  const dotsBtnNext = `<button class="pagination-btn next-dots">...</button>`;
  const btnPages = pages
    .map(num => {
      const isActive = num === state.currentPage ? 'active-pagination' : '';
      return `<button type="button" class="pagination-btn ${isActive}
        ">${num}</button>`;
    })
    .join('');
  const leftGroup = hasPrevGroup ? prev + firstPage + dotsBtnPrev : '';
  const rightGroup = hasNextGroup ? dotsBtnNext + lastPage + next : '';
  return leftGroup + btnPages + rightGroup;
};

const updateCurrentPage = newPage => {
  state.currentPage = newPage;
  clearPagination();

  renderPaginationMarkup();
};

const goToNextPage = () => {
  updateCurrentPage(state.currentPage + 1);
};
const goToPrevPage = () => {
  updateCurrentPage(state.currentPage - 1);
};
const goToNextGroupBtn = () => {
  const { pages } = paginate(state.totalPages, state.currentPage);
  const lastPageOfCurrentGroup = pages[pages.length - 1];
  const newPage = Math.min(lastPageOfCurrentGroup + 1, state.totalPages);
  state.currentPage = pages[pages.length - 1] + 1;
  updateCurrentPage(newPage);
};
const goToPrevGroupBtn = () => {
  const { pages } = paginate(state.totalPages, state.currentPage);
  const firstPageOfCurrentGroup = pages[0];
  const newPage = Math.max(firstPageOfCurrentGroup - 1, 1);
  updateCurrentPage(newPage);
};
const changePageByClick = evt => {
  const activeBtn = document.querySelector('.active-pagination');
  const selectedPage = Number(evt.target.textContent) || state.currentPage;
  if (selectedPage === state.currentPage) return;

  updateCurrentPage(selectedPage);
  activeBtn.classList.remove('active-pagination');
  evt.target.classList.add('active-pagination');
};

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

const onBtnPageClick = async evt => {
  if (evt.target.nodeName !== 'BUTTON') return;
  if (Number(evt.target.textContent) === state.currentPage) return;
  if (evt.target.classList.contains('next-btn')) goToNextPage();
  if (evt.target.classList.contains('next-dots')) goToNextGroupBtn();
  if (evt.target.classList.contains('prev-dots')) goToPrevGroupBtn();
  changePageByClick(evt);
  window.scrollTo({
    top: 0,
  });
  moviesEl.innerHTML = '';
  whatPaginated(state.whatPaginated);
};

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

// const paginationContainer = document.querySelector('.pagination');
// const previousButton = document.createElement('button');
// const nextButton = document.createElement('button');

// previousButton.classList.add('pagination-btn', 'previous-btn');
// previousButton.innerHTML =
//   '<ion-icon class="icon" name="arrow-back-outline"></ion-icon>';

// nextButton.classList.add('pagination-btn', 'next-btn');
// nextButton.innerHTML =
//   '<ion-icon class="icon" name="arrow-forward-outline"></ion-icon>';

// let currentPage = 1;
// let totalPages = 0;

// function displayCurrentPage() {
//   const paginationButtons =
//     paginationContainer.querySelectorAll('.pagination-btn');
//   paginationButtons.forEach(button => {
//     button.classList.remove('active-pagination');
//     if (button.innerText == currentPage) {
//       button.classList.add('active-pagination');
//     }
//   });
// }

// function createPaginationButtons(totalPages) {
//   paginationContainer.innerHTML = '';
//   paginationContainer.appendChild(previousButton);
//   for (let i = 1; i <= totalPages; i++) {
//     const button = document.createElement('button');
//     button.classList.add('pagination-btn');
//     button.innerText = i;
//     paginationContainer.appendChild(button);
//   }
//   paginationContainer.appendChild(nextButton);
// }

// function fetchPaginationData() {
//   const totalPagesFromBackend = 5;
//   totalPages = totalPagesFromBackend;
//   createPaginationButtons(totalPages);
// }

// paginationContainer.addEventListener('click', event => {
//   const target = event.target;
//   if (
//     target.classList.contains('pagination-btn') &&
//     target.innerText !== '...' &&
//     currentPage !== parseInt(target.innerText)
//   ) {
//     currentPage = parseInt(target.innerText);
//     displayCurrentPage();
//   }
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

// fetchPaginationData();

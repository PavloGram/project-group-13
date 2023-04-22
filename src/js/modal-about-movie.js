import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const notPic = new URL('../images/candy-cane.jpg', import.meta.url);

Loading.init({ svgColor: '#b92f2c' });

const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';
const BASE_URL = 'https://api.themoviedb.org/3/';

const backdrop = document.querySelector('.backdrop');
const modalMovie = document.querySelector('.modal-about-film');
const closeModalBtn = document.querySelector('.modal-close-btn');

const filmImageEl = document.querySelector('.modal-about-film-image');
const filmTitleEl = document.querySelector('.modal-about-film-title');
const filmVoteEl = document.querySelector('.modal-about-film__vote-data');
const filmVotesEl = document.querySelector('.modal-about-film__votes-data');
const filmPopularityEl = document.querySelector(
  '.modal-about-film__popularity-data'
);
const filmOriginalTitleEl = document.querySelector(
  '.modal-about-film__original-title'
);
const filmGenreEl = document.querySelector('.modal-about-film__genre');
const filmTextAboutEl = document.querySelector('.modal-about-film-infotext');

const addRemoveWatchedBtn = document.querySelector('.add-watched-btn');
const addRemoveQueueBtn = document.querySelector('.add-queue-btn');

const galleryContainerEl = document.querySelector('.container-card');
const galleryEl = document.querySelector('.galleryFilms-js');
const mainSectionEl = document.querySelector('main');

const btnWatchedInMyLibrary = document.querySelector('.btn.js_watched');
const btnQueueInMyLibrary = document.querySelector('.btn.js_queue');

let watched = [];
let queue = [];
let movieCard = '';
let movieTrailerURL;
let movieOfficialSite;

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? 0 : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

galleryEl.addEventListener('click', handleGallery);

function handleGallery(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }

  let filmId = Number(evt.target.closest('.film-card').getAttribute('data-id'));

  movieCard = evt.target.closest('.film-card');

  onOpenModal(filmId);
}

function onOpenModal(movieId) {
  backdrop.classList.remove('backdrop-hidden');
  modalMovie.setAttribute('data-id', `${movieId}`);

  watched = load('watched') ? load('watched') : [];
  if (watched.includes(movieId)) {
    addRemoveWatchedBtn.textContent = 'Remove from Watched';
    addRemoveWatchedBtn.classList.add('on-storage');
  } else {
    addRemoveWatchedBtn.textContent = 'Add to Watched';
    addRemoveWatchedBtn.classList.remove('on-storage');
  }

  queue = load('queue') ? load('queue') : [];
  if (queue.includes(movieId)) {
    addRemoveQueueBtn.textContent = 'Remove from queue';
    addRemoveQueueBtn.classList.add('on-storage');
  } else {
    addRemoveQueueBtn.textContent = 'Add to queue';
    addRemoveQueueBtn.classList.remove('on-storage');
  }

  fetchMovieById(movieId)
    .then(movie => {
      if (movie.poster_path == null) {
        filmImageEl.setAttribute(
          'alt',
          "Sorry, we don't have a poster of this movie"
        );
        filmImageEl.setAttribute('src', notPic);
      } else {
        filmImageEl.setAttribute('alt', 'Movie poster');
        filmImageEl.setAttribute(
          'src',
          `https://www.themoviedb.org/t/p/w500/${movie.poster_path}`
        );
      }
      filmTitleEl.innerHTML = movie.title;
      filmVoteEl.innerHTML = movie.vote_average.toFixed(1);
      filmVotesEl.innerHTML = movie.vote_count;
      filmPopularityEl.innerHTML = movie.popularity.toFixed(1);
      filmOriginalTitleEl.innerHTML = movie.original_title;
      let movieGenres = [];
      movie.genres.forEach(genre => {
        movieGenres.push(genre.name);
      });
      filmGenreEl.innerHTML = movieGenres.join(', ');

      filmTextAboutEl.innerHTML = movie.overview;

      document.body.classList.add('show-modal');
      window.addEventListener('keydown', onEscKeyPress);
      trailerBtnEl.addEventListener('click', handleTrailerBtn);
    })
    .catch(error => {
      console.error(error);
      Notify.failure(`Sorry, we don't find this movie`);
    })
    .finally(Loading.remove());

  addRemoveWatchedBtn.addEventListener('click', handleWatchedStorage);
  addRemoveQueueBtn.addEventListener('click', handleQueueStorage);
}

closeModalBtn.addEventListener('click', onCloseModal);

function onCloseModal() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onEscKeyPress);
  filmImageEl.setAttribute('src', '');
  addRemoveWatchedBtn.removeEventListener('click', handleWatchedStorage);
  addRemoveQueueBtn.removeEventListener('click', handleQueueStorage);
  modalMovie.removeAttribute('data-id');
  backdrop.classList.add('backdrop-hidden');
  trailerBtnEl.removeEventListener('click', handleTrailerBtn);
}

backdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(evt) {
  if (evt.target === evt.currentTarget) {
    onCloseModal();
  }
}

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    onCloseModal();
  }
}

function fetchMovieById(id) {
  Loading.standard();
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function handleWatchedStorage(evt) {
  let movieId = Number(
    evt.target.closest('.modal-about-film').getAttribute('data-id')
  );

  if (!watched.includes(movieId)) {
    watched.push(movieId);
    save('watched', watched);
    addRemoveWatchedBtn.textContent = 'Remove from Watched';
    addRemoveWatchedBtn.classList.add('on-storage');

    //------тут треба добавляти, якщо при відкритій модалці на 'My library' вже видалили картку з розмітки------
    if (
      mainSectionEl.classList.contains('my-library') &&
      btnWatchedInMyLibrary.classList.contains('is-active')
    ) {
      galleryEl.append(movieCard);
    }
  } else {
    const delEl = watched.indexOf(movieId);
    watched.splice(delEl, 1);
    save('watched', watched);
    addRemoveWatchedBtn.textContent = 'Add to Watched';
    addRemoveWatchedBtn.classList.remove('on-storage');

    //------тут треба видалити картку з розмітки-----
    if (
      mainSectionEl.classList.contains('my-library') &&
      btnWatchedInMyLibrary.classList.contains('is-active')
    ) {
      movieCard.remove();
    }
  }
}

function handleQueueStorage(evt) {
  let movieId = Number(
    evt.target.closest('.modal-about-film').getAttribute('data-id')
  );

  if (!queue.includes(movieId)) {
    queue.push(movieId);
    save('queue', queue);
    addRemoveQueueBtn.textContent = 'Remove from Queue';
    addRemoveQueueBtn.classList.add('on-storage');
    //------тут треба добавляти, якщо при відкритій модалці на 'My library' вже видалили картку з розмітки------
    if (
      mainSectionEl.classList.contains('my-library') &&
      btnQueueInMyLibrary.classList.contains('is-active')
    ) {
      galleryEl.append(movieCard);
    }
  } else {
    const delEl = queue.indexOf(movieId);
    queue.splice(delEl, 1);
    save('queue', queue);
    addRemoveQueueBtn.textContent = 'Add to Queue';
    addRemoveQueueBtn.classList.remove('on-storage');
    //------тут треба видалити картку з розмітки-----
    if (
      mainSectionEl.classList.contains('my-library') &&
      btnQueueInMyLibrary.classList.contains('is-active')
    ) {
      movieCard.remove();
    }
  }
}

<<<<<<< Updated upstream
const trailerBtnEl = document.querySelector('.movie-trailer');
const trailerBackdrop = document.querySelector('.trailer-backdrop');
const trailerContainer = document.querySelector('.trailer-container');
const trailerPlayer = document.querySelector('.trailer-player');

function handleTrailerBtn(evt) {
  let movieID = modalMovie.getAttribute('data-id');
 

  fetchTrailerById(movieID)
    .then(video => {
      movieTrailerURL = video.results[0];
      

      trailerBackdrop.classList.remove('backdrop-hidden');
      document.body.classList.add('show-trailer');
      trailerBackdrop.addEventListener('click', onBackdropTrailerClick);
      window.removeEventListener('keydown', onEscKeyPress);
      window.addEventListener('keydown', onEscKeyPressTrailer);
      trailerPlayer.setAttribute('src', `https://www.youtube.com/embed/${movieTrailerURL.key}`);
    })
    .catch(error => {
      console.error(error);
      Notify.failure(`Sorry, we don't have a trailer for this movie.`);
    })
    .finally(Loading.remove());
}

function fetchTrailerById(id) {
  Loading.standard();
  return fetch(`${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function onBackdropTrailerClick(evt) {
  if (evt.target === evt.currentTarget) {
    onCloseTrailerModal();
  }
}

function onEscKeyPressTrailer(evt) {
  if (evt.code === 'Escape') {
    onCloseTrailerModal();
  }
}

function onCloseTrailerModal() {
  document.body.classList.remove('show-trailer');
  trailerBackdrop.classList.add('backdrop-hidden');
  window.removeEventListener('keydown', onEscKeyPressTrailer);
  trailerBackdrop.removeEventListener('click', onBackdropTrailerClick);
  window.addEventListener('keydown', onEscKeyPress);
  trailerPlayer.setAttribute('src', `#`);
}
=======
// 
>>>>>>> Stashed changes

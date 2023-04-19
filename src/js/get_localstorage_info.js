import { renderMarkup } from './render-markup';
import axios from 'axios';

const STORAGE_KEY_WATCH = 'watched';
const STORAGE_KEY_QUEUE = 'queue';
const queueButton = document.querySelector('.js_queue');
const watchedButton = document.querySelector('.js_watched');
const galleryFilms = document.querySelector('.galleryFilms-js');
const nomoviesimages = document.querySelector('.start');

class ApiMovieSearch {
  #API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';

  constructor() {
    this.page = 1;
  }

  async fetchMovies(film_Id) {
    try {
      return await axios.get(
        `https://api.themoviedb.org/3/movie/${film_Id}?api_key=${this.#API_KEY}`
      );
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

const apiInfoMovies = new ApiMovieSearch();

function handleGetWatchedFilms() {
  galleryFilms.innerHTML = '';
  
  const savedData = localStorage.getItem(STORAGE_KEY_WATCH);
  
  const filmData = JSON.parse(savedData);
  
    if (filmData.length === 0) {
        nomoviesimages.classList.remove('is-hidden');
    }

  if (queueButton.classList.contains('is-active')) {
    queueButton.classList.remove('is-active');
  }
  watchedButton.classList.add('is-active');
  watchedButton.classList.add('btn-active');
  queueButton.classList.remove('btn-active');

  let datagenre_ids = [];
  let films = {
    results: [],
  };

  if (filmData) {
    try {
      nomoviesimages.classList.add('is-hidden');
       filmData.map(id => {
        apiInfoMovies
          .fetchMovies(id)
          .then(({ data }) => {
            datagenre_ids = data.genres.map(genre => genre.id);
            data.genre_ids = datagenre_ids;
            data.genres.map(genre => data.genre_ids.push(genre.id));
            films.results.push(data);
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => renderMarkup(films));
      });
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }
}

function handleGetQueueFilms() {
  galleryFilms.innerHTML = '';

  const savedData = localStorage.getItem(STORAGE_KEY_QUEUE);
  const filmData = JSON.parse(savedData);

    if (filmData.length === 0) {
      nomoviesimages.classList.remove('is-hidden');
    }

  if (watchedButton.classList.contains('is-active')) {
    watchedButton.classList.remove('is-active');
  }
  queueButton.classList.add('is-active');
  watchedButton.classList.remove('btn-active');
  queueButton.classList.add('btn-active');

  let datagenre_ids = [];
  let films = {
    results: [],
  };

  if (filmData) {
    try {
      nomoviesimages.classList.add('is-hidden');
        filmData.map(id => {
        apiInfoMovies
          .fetchMovies(id)
          .then(({ data }) => {
            datagenre_ids = data.genres.map(genre => genre.id);
            data.genre_ids = datagenre_ids;
            data.genres.map(genre => data.genre_ids.push(genre.id));
            films.results.push(data);
            // console.log(films);
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => renderMarkup(films));
      });
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }
}

watchedButton.addEventListener('click', handleGetWatchedFilms);
queueButton.addEventListener('click', handleGetQueueFilms);
window.addEventListener('load', handleGetWatchedFilms);

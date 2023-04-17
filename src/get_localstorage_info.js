import { renderMarkup } from './js/render-markup.js';
import axios from 'axios';

const STORAGE_KEY_WATCH = 'watched';
const STORAGE_KEY_QUEUE = 'queue';
const queueButton = document.querySelector('.js_queue');
const watchedButton = document.querySelector('.js_watched');
const galleryFilms = document.querySelector('.galleryFilms-js');
const nomoviesimages = document.querySelector('.start');

// console.log(queueButton);
// console.log(watchedButton);
class ApiMovieSearch {
  #API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';
 
  constructor() {
    this.page = 1;
  }

<<<<<<< Updated upstream
  async fetchMovies(film_Id) {
    try {
        return await axios.get(`https://api.themoviedb.org/3/movie/${film_Id}?api_key=${this.#API_KEY}`);
        
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

const apiInfoMovies = new ApiMovieSearch();

    function handleGetWatchedFilms() {
        galleryFilms.innerHTML = "";
=======
class ApiMovieSearch {
  #BASE_URL = 'https://api.themoviedb.org/3/movie';
  #API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';
 
  constructor() {
    this.page = 1;
  }

  async fetchMovies(movie_id) {
    try {
        return await axios.get(`${this.#BASE_URL}/${movie_id}?api_key=${this.#API_KEY}`);
        
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

const apiInfoMovies = new ApiMovieSearch ();

// const handlerLoadWindow = (id) =>{

//   apiInfoMovies
//   .fetchMovies(id)
//   .then(({data})=>{
// console.log(data)
// renderMarkup(data);
//   }).catch(err => {
//     console.log(err)
//   })
// }


function handleGetWatchedFilms() {
        filmList.innerHTML = "";
>>>>>>> Stashed changes
        const savedData = localStorage.getItem(STORAGE_KEY_WATCH);

        nomoviesimages.classList.add('is-hidden');
    
        if (queueButton.classList.contains('is-active')) {
        queueButton.classList.remove('is-active');
        }
        watchedButton.classList.add('is-active');
<<<<<<< Updated upstream
    
    let films = {
        results: [],
    };
    
=======
        
        if (savedData) {
        try {
            const filmData = JSON.parse(savedData);
            console.log(filmData);
            
            filmData.map((id) => {
                apiInfoMovies
                .fetchMovies(id)
                .then(({ data }) => {
                    console.log(data)
                    renderMarkup(data);
                }).catch(err => {
                    console.log(err)
  })
            })        
            // ApipopularMovies
            //     .fetchMovies()
            //     .then((filmData) => {
            //         filmList.insertAdjacentHTML('afterbegin', renderMarkup(filmData))
            //     }).catch(err => {
            //         console.log(err)
            //     })
            }
            catch (error) {
            console.error("Get state error: ", error.message);
    }}        
};

function handleGetQueueFilms() {
        filmList.innerHTML = "";
        const savedData = localStorage.getItem(STORAGE_KEY_QUEUE);

    if (watchedButton.classList.contains('is-active')) {
        watchedButton.classList.remove('is-active');
    }
    queueButton.classList.add('is-active');

>>>>>>> Stashed changes
        if (savedData) {
        try {
            const filmData = JSON.parse(savedData);
            console.log(filmData);
            filmData.map((id) => {
                apiInfoMovies
                    .fetchMovies(id)
                    .then(({ data }) => {
                        console.log(data);
                        data.genre_ids = data.genres;
                        films.results.push(data);
                        console.log(films);
                    
                        renderMarkup(films); 
                    
                        })                                 
                    .catch(err => {
                        console.log(err)
                    })
            })
            }
        catch (error) {
            console.error("Get state error: ", error.message);
            }
        }        
};


function handleGetQueueFilms() {
    galleryFilms.innerHTML = "";
    
    const savedData = localStorage.getItem(STORAGE_KEY_QUEUE);
    
    nomoviesimages.classList.add('is-hidden');
    
    if (watchedButton.classList.contains('is-active')) {
        watchedButton.classList.remove('is-active');
    }
    queueButton.classList.add('is-active');
     
        let films = {
        results: [],
    };

    if (savedData) {
        try {
            const filmData = JSON.parse(savedData);
            console.log(filmData);
            
            filmData.map((id) => {
                apiInfoMovies
                    .fetchMovies(id)
                    .then(({ data }) => {
                        console.log(data);
                        data.genre_ids = data.genres;
                        films.results.push(data);
                        console.log(films);
                    
                        renderMarkup(films);
                    
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        }
        catch (error) {
            console.error("Get state error: ", error.message);
    }
        }   
};

window.addEventListener('load', handleGetWatchedFilms);
watchedButton.addEventListener('click', handleGetWatchedFilms);
queueButton.addEventListener('click', handleGetQueueFilms);
window.addEventListener('load', handleGetWatchedFilms)
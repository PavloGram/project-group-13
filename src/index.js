import { fetchFilms } from './fetchFilms.js';
const BASE_URL = 'https://api.themoviedb.org/3/movie/76341'
const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b'

const inputEl = document.querySelector('.input')

// const searchParams = new URLSearchParams({
//     api_key: '1962278b5026dd7c7bb0a91cd47f798b',
//     media_type: 'all',
//     time_window: 'week',

// });

popularFilms()
function popularFilms() {
   
    fetchFilms()
      .then(forMarcup => {
        console.log(forMarcup);
        return marcupList(forMarcup);

      })
      .catch(er => {
        
      });
}
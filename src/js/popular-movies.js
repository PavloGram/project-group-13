import axios from 'axios';
// import { createCardsGallery } from './createCardGallery'; поміняти

// const galleryEl = document.querySelector('.gallery'); замінити
import { renderMarkup } from './render-markup';


 class APIpopular {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';
 
  constructor() {
    this.page = 1;
  }

  async fetchMovies() {
    try {
      return await axios.get(`${this.#BASE_URL}trending/movie/week?api_key=${this.#API_KEY}`);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}





const ApipopularMovies = new APIpopular();

const handlerLoadWindow = () =>{

  ApipopularMovies
  .fetchMovies()
  .then(({data})=>{
// console.log(data)
renderMarkup(data);
// поміняти 
// galleryEl.innerHTML = createCardsGallery(data.results);
  }).catch(err => {
    console.log(err)
  })
}

window.addEventListener('load', handlerLoadWindow)
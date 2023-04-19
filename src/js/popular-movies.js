import axios from 'axios';
import Pagination from 'tui-pagination';

import { renderMarkup } from './render-markup';

class APIpopular {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';

  constructor() {
    this.page = 1;
  }

  async fetchMovies(page) {
    if (page === undefined) {
      page = 1;
    }
    try {
      return await axios.get(
        `${this.#BASE_URL}trending/movie/week?api_key=${
          this.#API_KEY
        }&page=${page}`
      );
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
const blockPag = document.getElementById('tui-pagination-container');
const ApipopularMovies = new APIpopular();
const pagination = new Pagination(blockPag, { visiblePages: 5 });
const handlerLoadWindow = () => {
  ApipopularMovies.fetchMovies()

    .then(({ data }) => {
      renderMarkup(data);
      pagination.setTotalItems(data.total_results);
      pagination.setItemsPerPage(data.results.length);
      pagination.reset();
    })
    .catch(err => {
      console.log(err);
    });
};

window.addEventListener('load', handlerLoadWindow);

pagination.on('beforeMove', evt => {
  const { page } = evt;

  ApipopularMovies.fetchMovies(page)
    .then(({ data }) => {
      renderMarkup(data);
    })
    .catch(err => {
      console.log(err);
    });
});

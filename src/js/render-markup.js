import { genres } from './genres';
const notPic = new URL('../images/candy-cane.jpg', import.meta.url);

export function renderMarkup(films) {
  const createdElements = films.results
    .map(film => {
      if (
        film.genre_ids.length < 2 &&
        film.genre_ids.length !== 0 &&
        film.release_date === ''
      ) {
        const cardFilm = ` 
      <li class="film-card" data-id=${film.id}>
        <img class="film-poster" 
//         src="${
          film.poster_path === null
            ? `${notPic}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }" 
          alt=${film.title}>
        <h2 class="film-title">${film.title}</h2>
        <div class="film-info">
        <span class="film-details">${film.genre_ids
          .map(id => genres[id])
          .join(', ')}</span>
        </div>
      </li>`;
        return cardFilm;
      } else if (film.genre_ids.length > 2 && film.release_date === '') {
        const cardFilm = `
      <li class="film-card" data-id=${film.id}>
        <img class="film-poster" 
//         src="${
          film.poster_path === null
            ? `${notPic}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }"  
          alt=${film.title}>
        <h2 class="film-title">${film.title}</h2>
        <div class="film-info">
        <span class="film-details">${film.genre_ids
          .slice(0, 2)
          .map(id => genres[id])
          .join(', ')}, Other</span>
        </div>
      </li>`;
        return cardFilm;
      } else if (film.genre_ids.length === 0 && film.release_date === '') {
        const cardFilm = `
      <li class="film-card" data-id=${film.id}>
        <img class="film-poster" 
//         src="${
          film.poster_path === null
            ? `${notPic}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }"  
          alt=${film.title}>
        <h2 class="film-title">${film.title}</h2>
        <div class="film-info">
        <span class="film-details"></span>
        </div>
      </li>`;
        return cardFilm;
      } else if (film.genre_ids.length === 0 && film.release_date !== '') {
        const cardFilm = `
      <li class="film-card" data-id=${film.id}>
        <img class="film-poster" 
//         src="${
          film.poster_path === null
            ? `${notPic}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }" 
          alt=${film.title}>
        <h2 class="film-title">${film.title}</h2>
        <div class="film-info">
        <span class="film-details">${film.release_date.substr(0, 4)}</span>
        </div>
      </li>`;
        return cardFilm;
      } else if (film.genre_ids.length < 2 && film.genre_ids.length !== 0) {
        const cardFilm = ` 
      <li class="film-card" data-id=${film.id}>
        <img class="film-poster" 
//         src="${
          film.poster_path === null
            ? `${notPic}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }" 
          alt=${film.title}>
        <h2 class="film-title">${film.title}</h2>
        <div class="film-info">
        <span class="film-details">${film.genre_ids
          .map(id => genres[id])
          .join(', ')} | ${film.release_date.substr(0, 4)}</span>
        </div>
      </li>`;
        return cardFilm;
      // } else if (film.genre_ids.length > 2 && film.genre_ids.length !== 0) {
      } else  {
        const cardFilm = `
      <li class="film-card" data-id=${film.id}>
        <img class="film-poster" 
//         src="${
          film.poster_path === null
            ? `${notPic}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }" 
          alt=${film.title}>
        <h2 class="film-title">${film.title}</h2>
        <div class="film-info">
        <span class="film-details">${film.genre_ids
          .slice(0, 2)
          .map(id => genres[id])
          .join(', ')}, Other | ${film.release_date.substr(0, 4)}</span>
        </div>
      </li>`;
        return cardFilm;
      }
    })
    .join('');

  const galleryFilms = document.querySelector('.galleryFilms-js');
  galleryFilms.innerHTML = createdElements;
}

import { genres } from "./genres";

 export function renderMarkup(films) {
  const createdElements = films.results
    .map(film => {
      if (film.genre_ids.length <= 2) {
        const cardFilm = `
      <div class="film-card" data-id=${film.id}>
        <img class="film-poster" src="https://image.tmdb.org/t/p/w500${
          film.poster_path
        }" alt="poster">
        <h2 class="film-title">${film.original_title}</h2>
        <div class="film-info">
        <span class="film-details">${film.genre_ids
          .map(id => genres[id])
          .join(', ')} | ${film.release_date.substr(0, 4)}</span>
        </div>
      </div>`;
        return cardFilm;
      } else {
        const cardFilm = `
      <div class="film-card" data-id=${film.id}>
        <img class="film-poster" src="https://image.tmdb.org/t/p/w500${
          film.poster_path
        }" alt="poster">
        <h2 class="film-title">${film.original_title}</h2>
        <div class="film-info">
        <span class="film-details">${film.genre_ids
          .slice(0, 2)
          .map(id => genres[id])
          .join(', ')}, Other | ${film.release_date.substr(0, 4)}</span>
        </div>
      </div>`;
        return cardFilm;
      }
    })
    .join('');

     const galleryFilms = document.querySelector('.galleryFilms-js');
    //  renderMarkup();
     galleryFilms.innerHTML = createdElements;
     
}
// renderMarkup();
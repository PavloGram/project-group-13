export default function inputError(result) {
  const inputErrEl = document.querySelector('.error-input ');
  const imgEl = document.querySelector('.start')
  // const bsPaginstion = document.querySelector('.basic-pagination')
  const searchPagination = document.querySelector('.search-pagination')
  if (result === 0) {
    searchPagination.classList.add ('is-hidden');
            imgEl.classList.remove ('is-hidden');
    return inputErrEl.classList.remove('is-hidden');

  }
  imgEl.classList.add ('is-hidden');
  return inputErrEl.classList.add('is-hidden');
}

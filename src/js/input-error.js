export default function inputError(result) {
  const inputErrEl = document.querySelector('.error-input ');
  const imgEl = document.querySelector('.start');
  const searchPagination = document.querySelector('.basic-pagination');
  if (result === 0) {
    searchPagination.classList.add('is-hidden');
    imgEl.classList.remove('is-hidden');
    return inputErrEl.classList.remove('is-hidden');
  }
  imgEl.classList.add('is-hidden');
  return inputErrEl.classList.add('is-hidden');
}

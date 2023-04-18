export default function inputError(result) {
  const inputErrEl = document.querySelector('.error-input ');
  const imgEl = document.querySelector('.start')
  if (result === 0) {
            imgEl.classList.remove ('is-hidden');
    return inputErrEl.classList.remove('is-hidden');

  }
  imgEl.classList.add ('is-hidden');
  return inputErrEl.classList.add('is-hidden');
}

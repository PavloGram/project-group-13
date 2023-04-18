export default function inputError(result) {
  const inputErrEl = document.querySelector('.error-input ');

  if (result === 0) {
    return inputErrEl.classList.remove('is-hidden');
  }
  return inputErrEl.classList.add('is-hidden');
}

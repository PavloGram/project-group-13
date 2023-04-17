export default function inputError(array) {
  if (array.length > 0) {
    return inputErrEl.classList.add('is-hidden');
  }
  return inputErrEl.classList.remove('is-hidden');
}

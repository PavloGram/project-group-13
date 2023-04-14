const paginationContainer = document.querySelector('.pagination');
const paginationButtons =
  paginationContainer.querySelectorAll('.pagination-btn');
const previousButton = paginationContainer.querySelector('.previous-btn');
const nextButton = paginationContainer.querySelector('.next-btn');
const endButton = paginationContainer.querySelector('.end-btn');
const nextDotsButton = paginationContainer.querySelector('.next-dots');

let currentPage = 1;
const totalPages = paginationButtons.length - 2;

function displayCurrentPage() {
  paginationButtons.forEach(button => {
    button.classList.remove('active-pagination');
    if (button.innerText == currentPage) {
      button.classList.add('active-pagination');
    }
  });
}

paginationButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText != '...' && currentPage != button.innerText) {
      currentPage = parseInt(button.innerText);
      displayCurrentPage();
    }
  });
});

previousButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayCurrentPage();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayCurrentPage();
  }
});

endButton.addEventListener('click', () => {
  if (currentPage != totalPages) {
    currentPage = totalPages;
    displayCurrentPage();
  }
});

nextDotsButton.addEventListener('click', () => {
  if (currentPage < totalPages - 2) {
    currentPage += 3;
    displayCurrentPage();
  } else {
    currentPage = totalPages;
    displayCurrentPage();
  }
});

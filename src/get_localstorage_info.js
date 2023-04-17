import renderMarkup from './js/render-markup.js';

const STORAGE_KEY_WATCH = 'watched';
const STORAGE_KEY_QUEUE = 'queue';
const queueButton = document.querySelector('.js_queue');
const filmList = document.querySelector('.container-cards'); 
const watchedButton = document.querySelector('.js_watched');

// console.log(queueButton);
// console.log(watchedButton);


    function handleGetWatchedFilms() {
        filmList.innerHTML = "";
        const savedData = localStorage.getItem(STORAGE_KEY_WATCH);
        if (queueButton.classList.contains('is-active')) {
        queueButton.classList.remove('is-active');
        }
        watchedButton.classList.add('is-active');
        if (savedData) {
        try {
            const filmData = JSON.parse(savedData);
            console.log(filmData);
            filmList.insertAdjacentHTML('afterbegin', renderMarkup(filmData))
        }
        catch (error) {
            console.error("Get state error: ", error.message);
    }
        }   
};

function handleGetQueueFilms() {
        filmList.innerHTML = "";
        const savedData = localStorage.getItem(STORAGE_KEY_QUEUE);

    if (watchedButton.classList.contains('is-active')) {
        watchedButton.classList.remove('is-active');
    }
    queueButton.classList.add('is-active');
    
        if (savedData) {
        try {
            const filmData = JSON.parse(savedData);
            console.log(filmData);
            filmList.insertAdjacentHTML('afterbegin', renderMarkup(filmData))
        }
        catch (error) {
            console.error("Get state error: ", error.message);
    }
        }   
};


watchedButton.addEventListener('click', handleGetWatchedFilms);
queueButton.addEventListener('click', handleGetQueueFilms);
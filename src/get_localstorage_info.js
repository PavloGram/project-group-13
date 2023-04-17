// import createGalleryCard from './gallery_list.hbs';

const STORAGE_KEY_WATCH = 'watched';
const STORAGE_KEY_QUEUE = 'queue';
const queueButton = document.querySelector('.js_queue');
const filmList = document.querySelector('.container-cards'); //необхідно проставити відповідні класи в бібліотеці
const watchedButton = document.querySelector('.js_watched');

console.log(queueButton);
console.log(watchedButton);


    function handleGetWatchedFilms() {
        filmList.innerHTML = "";
        const savedData = localStorage.getItem(STORAGE_KEY_WATCH);

        if (savedData) {
        try {
            const filmData = JSON.parse(savedData);
            console.log(filmData);
            filmList.insertAdjacentHTML('afterbegin', createGalleryCard(filmData))
        }
        catch (error) {
            console.error("Get state error: ", error.message);
    }
        }   
};

function handleGetQueueFilms() {
        filmList.innerHTML = "";
        const savedData = localStorage.getItem(STORAGE_KEY_QUEUE);

        if (savedData) {
        try {
            const filmData = JSON.parse(savedData);
            console.log(filmData);
            filmList.insertAdjacentHTML('afterbegin', createGalleryCard(filmData))
        }
        catch (error) {
            console.error("Get state error: ", error.message);
    }
        }   
};


watchedButton.addEventListener('click', handleGetWatchedFilms);
queueButton.addEventListener('click', handleGetQueueFilms);
import { teamMembers } from './team';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const teamContainer = document.querySelector(".team")

function createTeamCards(items) {
    return items.map(({ name, icon, photo, work }) => {
        return `
    <li class="team__item">
        <h1 class="team__member-name">${name}</h1> 
        <a class="team__link" href="${photo}">
            <img
                class="team__image"
                src="${icon}"
                data-source="${photo}"
                alt="${name}"
                
            />
        </a>
        <p class="team__text"> ${work}</p>        </li>
    `;
    }).join("");
};

const teamCardsMarkup = createTeamCards(teamMembers);
teamContainer.insertAdjacentHTML('beforeend', teamCardsMarkup)


const box = new SimpleLightbox('.team a', {
    captionSelector: 'img',
    captionData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
});

(() => {
    const refs = {
      openModalLink: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      body: document.querySelector('body'),
    };
  
    refs.openModalLink.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
// import { teamMembers } from './team';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";


// const teamContainer = document.querySelector(".team")

// function createTeamCards(items) {
//     return items.map(({ name, icon, photo, work }) => {
//         return `
//     <li class="team__item">
//         <h1 class="team__member-name">${name}</h1> 
//         <p class="team__text"> ${work}</p>
//         <a class="team__link" href="${photo}">
//             <img
//                 class="team__image"
//                 src="${icon}"
//                 data-source="${photo}"
//                 alt="${name}"
//             />
//         </a>        </li>
//     `;
//     }).join("");
// };

// const teamCardsMarkup = createTeamCards(teamMembers);
// teamContainer.insertAdjacentHTML('beforeend', teamCardsMarkup)


// new SimpleLightbox('.team a', {
//     captions: true,
//     captionSelector: 'img',
//     captionsData: 'alt',
//     captionDelay: 100,
//     captionPosition: 'bottom'
// });


// // Team-modal
// (() => {
//     const refs = {
//       openModalLink: document.querySelector("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//       body: document.querySelector('body'),
//     };
  
//     refs.openModalLink.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();

// Add imports above this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(`.gallery`);
const galleryCards = createGalleryCards(galleryItems);

galleryList.insertAdjacentHTML(`beforeend`, galleryCards);

galleryList.addEventListener(`click`, onGalleryCardClick)

function createGalleryCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `
    }).join(``);
}

function onGalleryCardClick(e) {
    e.preventDefault()

    if (!e.target.classList.contains(`gallery__image`)) {
        return;
    }
}

let galleryEl = new SimpleLightbox('.gallery a', {
        captionsData: `alt`,
        captionDelay: 250,
});

galleryEl.on('show.simplelightbox', function () {
	
});
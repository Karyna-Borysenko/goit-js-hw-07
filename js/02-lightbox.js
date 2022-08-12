import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});

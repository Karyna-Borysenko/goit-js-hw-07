import { galleryItems } from "./gallery-items.js";

// Создание и рендер разметки
const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}

// Реализация делегирования на div.gallery и получение url большого изображения
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();
  const imageItem = event.target.classList.contains("gallery__image");
  if (!imageItem) {
    return;
  }
  const originalImage = event.target.dataset.source;

  // Открытие модального окна по клику на элементе галереи.
  const instance = basicLightbox.create(`<img src=${originalImage}>`);
  instance.show();

  // Закрытие с клавиатуры
  document.addEventListener("keyup", escapeHeandler);

  function escapeHeandler(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keyup", escapeHeandler);
    }
  }
}

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
  )
  .join("");

gallery.innerHTML = markupGallery;

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const source = event.target.dataset.source;

  const modal = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
    `);
  modal.show();

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modal.close();
    }
  });
});

console.log(galleryItems);

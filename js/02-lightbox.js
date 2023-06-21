import { galleryItems } from "../js/gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");
function galleryMarkup(images) {
  return images.map(
    (img) => `<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      alt="${img.description}"
    />
  </a>
</li>`
  ) .join('');
}

gallery.insertAdjacentHTML("beforeend", galleryMarkup(galleryItems));



gallery.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "IMG") {
    return;
  }
}

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});
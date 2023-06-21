import { galleryItems } from "/js/gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.innerHTML = makeGalleryMarkup(galleryItems);

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

gallery.addEventListener("click", openImg);
function openImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const imgSource = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imgSource}" "width="800" height="600" >
  `);

  instance.show();

  console.log(instance);
  
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || evt.keyCode === 27) {
      instance.close();
    }
  });
}

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkUp = galleryItems.map(imageItem => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${imageItem.original}">
      <img
        class="gallery__image"
        src="${imageItem.preview}"
        data-source="${imageItem.original}"
        alt="${imageItem.description}"
      />
    </a>
  </li>`
}).join('')

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryMarkUp;

gallery.addEventListener('click', (event)=> {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
})
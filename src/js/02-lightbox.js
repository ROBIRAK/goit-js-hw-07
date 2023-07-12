import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryMarkUp = galleryItems.map(imageItem => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${imageItem.original}">
       <img class="gallery__image" src="${imageItem.preview}" alt="${imageItem.description}" />
    </a>
 </li>`
}).join('')

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryMarkUp;

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

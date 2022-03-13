import { renderPictures } from '../js/create-thumbnails.js';
import { showBigPicture } from '../js/show-full-photo.js';

renderPictures();

const thumbnailsImage = document.querySelectorAll('.picture');

const clickedElement = () => thumbnailsImage.forEach((element) => {
  element.addEventListener('click', () => {
    showBigPicture(element);
  });
});

export {clickedElement};

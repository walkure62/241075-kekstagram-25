import { fillFullPhoto, bigPicture } from '../js/show-full-photo.js';
import { closePopup } from '../js/utils.js';

const pictures = document.querySelector('.pictures');
const buttonBigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const openFullPhoto = () => {
  pictures.addEventListener('click', (evt) => {
    if (evt.target.className === 'picture__img') {
      fillFullPhoto(evt.target);
      closePopup(bigPicture, buttonBigPictureCancel);
    }
  });
};

export { openFullPhoto };

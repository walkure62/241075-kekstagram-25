import { fillFullPhoto } from '../js/show-full-photo.js';

const openFullPhoto = () => document.querySelectorAll('.picture').forEach((element) => {
  element.addEventListener('click', () => {
    fillFullPhoto(element);
  });
});

export {openFullPhoto};

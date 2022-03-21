import { POSTS } from '../js/data.js';
const pictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content;
const picturesFragment = document.createDocumentFragment();

const createPictures = (data) => {
  const pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = data.url;
  pictureElement.querySelector('.picture__likes').textContent = data.likes;
  pictureElement.querySelector('.picture__comments').textContent = data.comments.length;
  pictureElement.querySelector('.picture__img').alt = data.description;
  pictureElement.querySelector('.picture__img').id = data.id;

  picturesFragment.appendChild(pictureElement);
};

const renderPictures = () => {
  POSTS.forEach((post) => {
    createPictures(post);
  });
  pictures.appendChild(picturesFragment);
};

export {pictures, renderPictures};

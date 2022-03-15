import { POSTS } from '../js/create-posts.js';

const posts = POSTS();
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
  for (let i = 0; i < posts.length; i++) {
    createPictures(posts[i]);
  }
  pictures.appendChild(picturesFragment);
};

export {posts, renderPictures};

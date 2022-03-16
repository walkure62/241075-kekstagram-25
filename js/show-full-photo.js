import { posts } from '../js/create-thumbnails.js';
import { removeAllChildren, closePopup } from '../js/utils.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');
const buttonBigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const counterComments = bigPicture.querySelector('.social__comment-count');
const loaderComments = bigPicture.querySelector('.comments-loader');

const fillComments = (insertPointComments, comments) => {
  removeAllChildren(commentsList);
  const fragmentComments = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = templateComment.cloneNode(true);
    const commentator = commentElement.querySelector('.social__picture');
    commentator.src = comment.avatar;
    commentator.alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    fragmentComments.appendChild(commentElement);
  });
  insertPointComments.appendChild(fragmentComments);
};

const fillFullPhoto = (data) => {
  const image = document.querySelector('.big-picture__img').querySelector('img');
  const likes = document.querySelector('.likes-count');
  const comments = document.querySelector('.comments-count');
  const description = bigPicture.querySelector('.social__caption');

  const clickedElement = data.innerHTML;
  const newElement = document.createElement('div');
  newElement.innerHTML = clickedElement;
  const idClickedElement = newElement.querySelector('.picture__img').getAttribute('id');

  image.src = newElement.querySelector('.picture__img').getAttribute('src');
  likes.textContent = newElement.querySelector('.picture__likes').innerText;
  comments.textContent = newElement.querySelector('.picture__comments').innerText;

  image.innerHTML = image;

  posts.forEach((post) => {
    if (post.id === Number(idClickedElement)) {
      description.textContent = post.description;
      fillComments(commentsList, post.comments);
    }
  });

  bigPicture.classList.remove('hidden');
  counterComments.classList.add('hidden');
  loaderComments.classList.add('hidden');
  body.classList.add('modal-open');
  closePopup(bigPicture, buttonBigPictureCancel);
};

export {fillFullPhoto};

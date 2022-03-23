import { POSTS } from '../js/data.js';
import { removeAllChildren } from '../js/utils.js';
import { BODY } from '../js/data.js';

const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');
const counterComments = bigPicture.querySelector('.social__comment-count');
const loaderComments = bigPicture.querySelector('.comments-loader');
const COMMENTS_LOAD_LIMIT = 5;

const fillComments = (insertPointComments, comments) => {
  const fragmentComments = document.createDocumentFragment();
  const commentsArray = comments.slice();
  const commentsArrayLength = commentsArray.length;
  let commentsShow = [];
  let commentsCounter = 0;
  counterComments.classList.add('hidden');
  loaderComments.classList.add('hidden');
  removeAllChildren(commentsList);

  const showComments = (array) => {
    array.forEach((comment) => {
      const commentElement = templateComment.cloneNode(true);
      const commentator = commentElement.querySelector('.social__picture');
      commentator.src = comment.avatar;
      commentator.alt = comment.name;
      commentElement.querySelector('.social__text').textContent = comment.message;
      fragmentComments.appendChild(commentElement);
      insertPointComments.appendChild(fragmentComments);
    });
  };
  if (commentsArray.length > COMMENTS_LOAD_LIMIT) {
    counterComments.classList.remove('hidden');
    commentsShow = commentsArray.splice(0, COMMENTS_LOAD_LIMIT);
    loaderComments.classList.remove('hidden');
    commentsCounter = commentsShow.length;
    counterComments.querySelector('.comments-count').textContent = commentsArrayLength;
    showComments(commentsShow);
    loaderComments.addEventListener('click', () => {
      commentsShow = commentsArray.splice(0, COMMENTS_LOAD_LIMIT);
      showComments(commentsShow);

      commentsCounter += commentsShow.length;
      counterComments.textContent = commentsCounter;
      counterComments.querySelector('.comments-count').textContent = commentsArrayLength;
      if (commentsArray.length === 0) {
        loaderComments.classList.add('hidden');
      }
    });
  } else {
    showComments(commentsArray);
  }
};

const fillFullPhoto = (data) => {
  const image = document.querySelector('.big-picture__img').querySelector('img');
  const likes = document.querySelector('.likes-count');
  const comments = document.querySelector('.comments-count');
  const description = bigPicture.querySelector('.social__caption');
  const idClickedElement = data.getAttribute('id');

  image.src = data.getAttribute('src');
  image.alt = data.getAttribute('alt');

  BODY.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  POSTS.forEach((post) => {
    if (post.id === Number(idClickedElement)) {
      description.textContent = post.description;
      likes.textContent = post.likes;
      comments.textContent = post.comments.length;
      fillComments(commentsList, post.comments);
    }
  });
};

export {fillFullPhoto, bigPicture};

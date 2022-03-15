import {COMMENTS_ID, ID_NUMBER} from '../js/data.js';

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const checkMaxLength = (string, maxLength) => string.length <= maxLength;

const getRandomArrayElement = (array) =>
  array[getRandomNumber(0, array.length - 1)];

const makeCounter = (start) => {
  let currentCount = start;

  return () => currentCount++;
};

const counterId = makeCounter(1);
const counterUrl = makeCounter(1);

const createCommentId =  () => {
  const randomNumber = Math.floor(Math.random() * ID_NUMBER);
  if (!COMMENTS_ID.includes(randomNumber)) {
    COMMENTS_ID.push(randomNumber);
    return randomNumber;
  } else if (COMMENTS_ID.length - 1 !== ID_NUMBER) {
    createCommentId();
  }
};

const removeAllChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const closePopup = (block, closeButton) => {
  closeButton.addEventListener('click', () => block.classList.add('hidden'));
  document.addEventListener('keydown', (element) => {
    if (element.key === 'Escape') {
      block.classList.add('hidden');
    }
  });
};

export {getRandomNumber, checkMaxLength, getRandomArrayElement, counterId, counterUrl, createCommentId, removeAllChildren, closePopup};

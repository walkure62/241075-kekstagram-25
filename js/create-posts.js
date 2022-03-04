import {createCommentId, getRandomNumber, getRandomArrayElement, counterId, counterUrl,} from '../js/utils.js';
import {COMMENTS, NAMES, DESCRIPTION, MIN_LIKES, MAX_LIKES, POST_QUANTITY} from '../js/data.js';

const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPost = () => ({
  id: counterId(),
  url: `photos/${counterUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: createComment(),

});

const POSTS = () => Array.from({ length: POST_QUANTITY }, createPost);
// eslint-disable-next-line no-console
console.log(POSTS);

export {POSTS};

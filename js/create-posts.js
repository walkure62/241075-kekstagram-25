import {createCommentId, getRandomNumber, getRandomArrayElement, counterId, counterUrl,} from '../js/utils.js';
import {COMMENTS, NAMES, DESCRIPTION, MIN_LIKES, MAX_LIKES, MIN_COMMENTS, MAX_COMMENTS, POST_QUANTITY} from '../js/data.js';

const createComments = (quantity) => {
  const comments = [];
  for (let i = 0; i <= quantity; i++) {
    const comment = {
      id: createCommentId(),
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(NAMES),
    };
    comments.push(comment);
  }
  return comments;
};

const createPost = () => ({
  id: counterId(),
  url: `photos/${counterUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: createComments(`${getRandomNumber(MIN_COMMENTS, MAX_COMMENTS)}`),

});

const getPosts = () => Array.from({ length: POST_QUANTITY }, createPost);

export {getPosts};

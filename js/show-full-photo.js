const bigPicture = document.querySelector('.big-picture');
//const commentsList = document.querySelector('.social__comments');


const showBigPicture = function (data) {
  const image = document.querySelector('.big-picture__img').querySelector('img');
  const likes = document.querySelector('.likes-count');
  const comments = document.querySelector('.comments-count');

  const clickedElement = data.innerHTML;
  const newElement = document.createElement('div');
  newElement.innerHTML = clickedElement;

  image.src = newElement.querySelector('.picture__img').getAttribute('src');
  likes.textContent = newElement.querySelector('.picture__likes').innerText;
  comments.textContent = newElement.querySelector('.picture__comments').innerText;
  image.innerHTML = image;

  bigPicture.classList.remove('hidden');
};

export {showBigPicture};

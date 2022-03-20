const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const commentsList = document.querySelector('.social__comments');
const picturesUpload = document.querySelector('.img-upload').children;
console.log(picturesUpload);

const getDataOnclick = (elem) => {
  const src = elem.src;
  return src;
};

const showFullPicture = () => {
  bigPicture.classList.remove('hidden');
  for (let i = 0; i < picturesUpload.length; i++) {
    picturesUpload[i].addEventListener('click', getDataOnclick(this));
  }
};

console.log(showFullPicture());

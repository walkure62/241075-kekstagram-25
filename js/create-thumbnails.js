const pictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content;
const picturesFragment = document.createDocumentFragment();

const createPictures = (data) => {
  data.forEach((post) => {
    const pictureElement = picturesTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = post.url;
    pictureElement.querySelector('.picture__likes').textContent = post.likes;
    pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
    pictureElement.querySelector('.picture__img').alt = post.description;
    pictureElement.querySelector('.picture__img').id = post.id;

    picturesFragment.appendChild(pictureElement);
    pictures.appendChild(picturesFragment);
  });
};

export {createPictures};

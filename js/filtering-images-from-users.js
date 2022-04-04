import { getRandomArrayElement } from '../js/utils.js';
import { createPictures } from '../js/create-thumbnails.js';
import { debounce } from '../js/utils.js';

const picturesFiltres = document.querySelector('.img-filters');
const defaultFilter = picturesFiltres.querySelector('#filter-default');
const randomFilter = picturesFiltres.querySelector('#filter-random');
const popularFilter = picturesFiltres.querySelector('#filter-discussed');
const QUANTITY_RANDOM_PICTURES = 10;
const TIMEOUT = 500;

const filteringImagesFromUsers = (data) => {
  const filterPictires = data.slice();

  const filterRandom = (quantity) => {
    const arrayRandomPictures = [];
    for (let i = 0; i < quantity; i++) {
      arrayRandomPictures.push(getRandomArrayElement(filterPictires));
    }
    return arrayRandomPictures;
  };

  const filterPopular = () => {
    const arrayPopularPictures = filterPictires.slice();
    const comparePost = (postA, postB) => {
      const rankA = postA.likes;
      const rankB = postB.likes;

      return rankB - rankA;
    };
    return arrayPopularPictures.sort(comparePost);
  };
  const onChangeFilter = (element) => {
    element.classList.remove('img-filters__button--active');

    if (element === randomFilter) {
      defaultFilter.classList.remove('img-filters__button--active');
      popularFilter.classList.remove('img-filters__button--active');
      element.classList.add('img-filters__button--active');
      return filterRandom(QUANTITY_RANDOM_PICTURES);
    } else if (element === popularFilter) {
      defaultFilter.classList.remove('img-filters__button--active');
      randomFilter.classList.remove('img-filters__button--active');
      element.classList.add('img-filters__button--active');
      return filterPopular();
    } else if (element === defaultFilter) {
      popularFilter.classList.remove('img-filters__button--active');
      randomFilter.classList.remove('img-filters__button--active');
      element.classList.add('img-filters__button--active');
      return data;
    }
  };

  picturesFiltres.addEventListener('click', (evt) => {
    if (evt.target !== picturesFiltres) {
      debounce(() => createPictures(onChangeFilter(evt.target)), TIMEOUT);
    }
  });
};

export {filteringImagesFromUsers};

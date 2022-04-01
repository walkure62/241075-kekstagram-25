
import { onError } from '../js/utils.js';

let pictures = [];
const BODY = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}: Something went wrong. Please try again or contact support.`);
    })
    .then((element) => {
      pictures = element;
      onSuccess(element);
    })
    .catch((err) => {
      onError(BODY, err, 'error-load-container');
    });
};

const postData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagra',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
      throw new Error(`${response.status} ${response.statusText}`);
    }
  })
    .catch((err) => {
      onError(uploadForm, err, 'error-post-container');
    });
};

export {pictures, getData, postData};

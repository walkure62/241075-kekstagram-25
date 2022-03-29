/* eslint-disable no-console */
import { onError } from '../js/utils.js';
const uploadForm = document.querySelector('.img-upload__form');

const MAX_HASH_TAGS_AMOUNT = 5;
const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASH_TAGS_LENGTH = 20;

//Шаблон регулярного выражения для проверки хэш-тегов
// eslint-disable-next-line no-misleading-character-class
const regularExpression = /^#[A-Za-zА-Яа-яËё0-9]{1,19}$/;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid', // Класс, обозначающий невалидное поле
  successClass: 'form__item--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'img-upload__text',
  errorTextTag: 'p',
  errorTextClass: 'field__error'
});

const getHashTags = (str) =>  {
  const arrayTags =  [];
  str.split(' ').map((element) => {
    arrayTags.push(element.toLowerCase());
  });
  return arrayTags;
};

//Проверка на количество хэш-тегов - не более maxHashTagsAmount
const checkHashTagsAmount = (tags) => tags.length <= MAX_HASH_TAGS_AMOUNT;

//Проверка длины хэш-тега - не более MAX_HASH_TAGS_LENGTH
const checkHashTagsLength = (tags) => tags.forEach((element) => element.length <= MAX_HASH_TAGS_LENGTH);

//Проверка на отсутствие одинаковых хэш-тегов
const checkHashTagsRepeat = (tags) => tags.every((currentValue, index, array) => array.indexOf(currentValue) === index);

const validateHashTags = (value) => {
  console.log(getHashTags(value));
  getHashTags(value).forEach((element) => {
    console.log(`Проверка через regExp: ${regularExpression.test(element)}`);
    regularExpression.test(element);
  });
  console.log(`Проверка на количество тегов (не более 5 тегов): ${checkHashTagsAmount(getHashTags(value))}`);
  checkHashTagsAmount(getHashTags(value));
  console.log(`Проверка на повторение тегов: ${checkHashTagsRepeat(getHashTags(value))}`);
  checkHashTagsRepeat(getHashTags(value));
  console.log(`Проверка длины тега (не более 20 символов): ${checkHashTagsLength(getHashTags(value))}`);
  checkHashTagsLength(getHashTags(value));

};

//Проверка длины введенного комментария - не более maxDescriptionLength
const validateDescription = (str) => {
  console.log(`Проверка длины комментария: ${str.length >= 1 && str.length <= MAX_DESCRIPTION_LENGTH}`);
  return str.length >= 1 && str.length <= MAX_DESCRIPTION_LENGTH;
};

pristine.addValidator(uploadForm.querySelector('.text__hashtags'), validateHashTags, 'Введено невалидное значение хэш-тега');
pristine.addValidator(uploadForm.querySelector('.text__description'), validateDescription, 'Длина комментария не должна превышать 140 символов');

const onUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    console.log(isValid);
    evt.preventDefault();

    if (isValid) {
      const formData = new FormData(evt.target);
      fetch(
        'https://25.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      ).then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      })
        .catch((err) => {
          onError(err, 'error-load-container');
        });
    }
  });
};

export {onUploadFormSubmit, pristine};

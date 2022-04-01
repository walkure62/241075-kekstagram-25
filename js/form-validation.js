/* eslint-disable no-console */
import { blockSubmitButton, unblockSubmitButton} from '../js/utils.js';
import { postData } from '../js/data-server.js';
const uploadForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');
const descriptionTextarea = uploadForm.querySelector('.text__description');
const hashTagsInput = uploadForm.querySelector('.text__hashtags');

const MAX_HASH_TAGS_AMOUNT = 5;
const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASH_TAGS_LENGTH = 20;

//Шаблон регулярного выражения для проверки хэш-тегов
// eslint-disable-next-line no-misleading-character-class
const regularExpression = /^#[A-Za-zА-Яа-яËё0-9]{1,19}$/;

const pristine = new Pristine(uploadForm, {
  classTo: 'validate__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'validate__item',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
});

const getHashTags = (str) => str.split(' ').map((element) => element.toLowerCase());

//Проверка на количество хэш-тегов - не более maxHashTagsAmount
const checkHashTagsAmount = (str) => {
  console.log(str);
  console.log(`Проверка на количество тегов (не более 5 тегов): ${getHashTags(str).length <= MAX_HASH_TAGS_AMOUNT}`);
  return getHashTags(str).length <= MAX_HASH_TAGS_AMOUNT;
};

//Проверка длины хэш-тега - не более MAX_HASH_TAGS_LENGTH
const checkHashTagsLength = (str) => {
  console.log(str);
  console.log(`Проверка длины тега (не более 20 символов): ${getHashTags(str).every((element) => element.length <= MAX_HASH_TAGS_LENGTH)}`);
  return getHashTags(str).every((element) => element.length <= MAX_HASH_TAGS_LENGTH);
};

//Проверка на отсутствие одинаковых хэш-тегов
const checkHashTagsRepeat = (str) => {
  console.log(str);
  if (str.length !== 0) {
    console.log(getHashTags(str));
    console.log(`Проверка на повторение тегов: ${getHashTags(str).every((currentValue, index, array) => array.indexOf(currentValue) === index)}`);
    return getHashTags(str).every((currentValue, index, array) => array.indexOf(currentValue) === index);
  } else {
    return true;
  }
};

const checkHashTagsRegExp = (str) => {
  console.log(str);
  console.log(getHashTags(str));
  if (str.length > 0) {
    getHashTags(str).every((element) => {
      console.log(`Проверка через regExp: ${regularExpression.test(element)}`);
      return regularExpression.test(element);
    });
  } else {
    return true;
  }
};

//Проверка длины введенного комментария - не более maxDescriptionLength
const validateDescription = (str) => {
  console.log(str);
  console.log(`Проверка длины комментария: ${str.length <= MAX_DESCRIPTION_LENGTH}`);
  return str.length <= MAX_DESCRIPTION_LENGTH;
};

pristine.addValidator(hashTagsInput, checkHashTagsRegExp, 'Введено невалидное значение хэш-тега', true);
pristine.addValidator(hashTagsInput, checkHashTagsAmount, `Количество хэш-тегов не должно превышать ${MAX_HASH_TAGS_AMOUNT}`);
pristine.addValidator(hashTagsInput, checkHashTagsLength, `Длина хэш-тега не должна превышать ${MAX_HASH_TAGS_LENGTH} символов`);
pristine.addValidator(hashTagsInput, checkHashTagsRepeat, 'Хэш-теги не должны повторяться!');
pristine.addValidator(descriptionTextarea, validateDescription, `Длина комментария не должна превышать ${MAX_DESCRIPTION_LENGTH} символов`);

const onUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    console.log(isValid);

    if (isValid) {
      blockSubmitButton(submitButton);
      postData(
        () => {
          onSuccess();
          unblockSubmitButton(submitButton);
        },
        () => {
          unblockSubmitButton(submitButton);
        },
        new FormData(evt.target)
      );
    }
  });
};

export {onUploadFormSubmit, pristine};

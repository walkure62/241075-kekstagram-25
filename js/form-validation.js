const uploadForm = document.querySelector('.img-upload__form');

const maxHashTagsAmount = 5;
const maxDescriptionLength = 140;

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

const getHashTags = (str) => str.split(' ').map((element) => element.toLowerCase());

//Проверка на количество хэш-тегов - не более maxHashTagsAmount
const checkHashTagsAmount = (tags) => tags.length <= maxHashTagsAmount;

//Проверка на отсутствие одинаковых хэш-тегов
const checkHashTagsRepeat = (tags) => (tags.every((element) => tags.indexOf(element) === tags.lastIndexOf(element)));

const validateHashTags = (value) => getHashTags(value).every((element, index, array) =>
  regularExpression.test(element) && checkHashTagsAmount(array) && checkHashTagsRepeat(array)
);

//Проверка длины введенного комментария - не более maxDescriptionLength
const validateDescription = (str) => str.length >= 1 && str.length <= maxDescriptionLength;

pristine.addValidator(uploadForm.querySelector('.text__hashtags'), validateHashTags, 'Введено невалидное значение хэш-тега');
pristine.addValidator(uploadForm.querySelector('.text__description'), validateDescription, 'Длина комментария не должна превышать 140 символов');

const onUploadFormSubmit = (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
  uploadForm.submit();
};

export {onUploadFormSubmit, pristine};

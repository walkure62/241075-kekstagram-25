import { BODY } from '../js/data.js';
import { closePopup } from '../js/utils.js';
import { onUploadFormSubmit } from '../js/form-validation.js';

const uploadButton = document.querySelector('#upload-file');
const editForm = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const buttonEditFormCancel = document.querySelector('#upload-cancel');

const closeEditForm = () => {
  uploadForm.reset();
  uploadButton.value = '';
  closePopup(editForm, buttonEditFormCancel);
};

const openEditor = () => {
  uploadButton.addEventListener('change', () => {
    BODY.classList.add('modal-open');
    editForm.classList.remove('hidden');
    uploadForm.addEventListener('submit', onUploadFormSubmit);
    closeEditForm();
  });
};

export {openEditor, uploadForm};

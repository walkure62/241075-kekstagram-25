import { closePopup } from '../js/utils.js';
import { onUploadFormSubmit, pristine} from '../js/form-validation.js';

const BODY = document.querySelector('body');
const uploadButton = document.querySelector('#upload-file');
const editForm = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
import { onError } from '../js/utils.js';

const buttonEditFormCancel = document.querySelector('#upload-cancel');
const photoPreview = document.querySelector('.img-upload__preview');
const intensivityEffectForm = document.querySelector('.img-upload__effect-level');

const closeEditForm = () => {
  uploadForm.reset();
  uploadButton.value = '';
  photoPreview.style['filter'] = 'none';
  photoPreview.querySelector('img').style['transform'] = 'none';
  intensivityEffectForm.classList.add('hidden');
  pristine.reset();
  closePopup(editForm, buttonEditFormCancel);
};

const openEditor = () => {
  uploadButton.addEventListener('change', () => {
    BODY.classList.add('modal-open');
    editForm.classList.remove('hidden');
    closeEditForm();
    onUploadFormSubmit(closeEditForm, onError);
  });
};

export {openEditor, uploadForm};

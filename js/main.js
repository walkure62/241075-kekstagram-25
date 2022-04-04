import {getData} from '../js/data-server.js';
import {createPictures} from '../js/create-thumbnails.js';
import {openFullPhoto} from '../js/gallery.js';
import {openEditor} from '../js/show-photo-editing-form.js';
import {changeScale} from '../js/photo-scale.js';
import {settingsSlider} from '../js/photo-filters.js';
import {filteringImagesFromUsers} from '../js/filtering-images-from-users.js';

getData(createPictures);
getData(filteringImagesFromUsers);
openFullPhoto();
openEditor();
changeScale();
settingsSlider();

let pictures = [];
const renderPictures = (onSuccess, onError) => {
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
      onError(err, 'error-load-container');
    });
};

export {pictures,renderPictures};

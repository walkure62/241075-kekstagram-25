const GET_RANDOM_NUMBER = function (min, max) {
  if (min >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const ERROR = new Error(
    'Введены некорректные данные! Диапазон не должен содержать отрицательных значений и максимальное значение диапазона должно быть больше минимального значения!'
  );
  console.log(ERROR.message); // eslint-disable-line no-console
};

const CHECK_MAX_LENGTH = function (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};
GET_RANDOM_NUMBER();
CHECK_MAX_LENGTH();

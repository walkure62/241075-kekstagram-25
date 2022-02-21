let getRandomNumber = function (min, max) {
  if (min >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const ERROR = new Error(
    "Введены некорректные данные! Диапазон не должен содержать отрицательных значений и максимальное значение диапазона должно быть больше минимального значения!"
  );
  console.log(ERROR.message);
};

let checkMaxLength = function (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

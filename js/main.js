const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  return result;
};

// eslint-disable-next-line no-unused-vars
const checkMaxLength = (string, maxLength) => string.length <= maxLength;

const NAMES = [
  'Иван',
  'Анастасия',
  'Мария',
  'Ибрагим',
  'Виктор',
  'Алия',
  'Кекс',
  'Василий',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTION = [
  'Смейтесь как только умеете, любите столько, сколько живете.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Жизнь — это всего лишь серия крошечных чудес, поэтому обратите внимание на них.',
  'Я пыталась заниматься йогой, но в позе лотоса уснула.',
  'Ты любишь всех, а любить всех — значит не любить никого.',
  'Циник — это человек, который всему знает цену и ничего не ценит.',
  'Опытом люди называют свои ошибки.',
  'В жизни бывают только две настоящие трагедии: одна — когда не получаешь того, чего хочешь, а вторая — когда получаешь.',
  'Кто эти люди? Бойцы? Нисколько.Может быть, партизаны? Нет.',
  'Жди меня, и я вернусь. Только очень жди...',
  'В одно окно смотрели двое. Один увидел дождь и грязь. Другой — листвы зелёной вязь,весну и небо голубое.В одно окно смотрели двое',
  'Чтоб мудро жизнь прожить, знать надобно немало, Два важных правила запомни для начала: Ты лучше голодай, чем что попало есть,И лучше будь один, чем вместе с кем попало.',
];

const POST_QUANTITY = 25;

const getRandomArrayElement = (array) =>
  array[getRandomNumber(0, array.length - 1)];

const makeCounter = (start) => {
  let currentCount = start;

  return () => currentCount++;
};

const counterId = makeCounter(1);
const counterUrl = makeCounter(1);

const COMMENTS_ID = [];
const createCommentId =  () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  if (!COMMENTS_ID.includes(randomNumber)) {
    COMMENTS_ID.push(randomNumber);
    return randomNumber;
  } else if (COMMENTS_ID.length - 1 !== 1000) {
    createCommentId();
  }
};

const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPost = () => ({
  id: counterId(),
  url: `photos/${counterUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumber(15, 200),
  comments: createComment(),

});

const POSTS = Array.from({ length: POST_QUANTITY }, createPost);
// eslint-disable-next-line no-console
console.log(POSTS);

import {getSetOfItemsFromArray, getRandomArrayItem, getRandomInteger, getRandomDate} from "../utils.js";
import {emotes} from "../const.js";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum
  pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus
  ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta
  dapibus. In rutrum ac purus sit amet tempus`.split(`. `);


const actors = [
  `James Stewart`,
  `Spencer Tracy`,
  `Marlon Brando`,
  `Laurence Olivier`,
  `Paul Newman`,
  `Henry Fonda`,
  `Humphrey Bogart`,
  `Richard Burton`,
  `Charles Chaplin`,
  `Clark Gable`,
  `Ronald Colman`,
  `Kirk Douglas`,
  `Gregory Peck`,
];

const generateComments = () => {
  const length = getRandomInteger(1, 6);
  let comments = [];
  for (let i = 0; i < length; i++) {
    comments.push({
      emoji: getRandomArrayItem(emotes),
      text: getSetOfItemsFromArray(lorem, 1, 3),
      author: getRandomArrayItem(actors),
      date: getRandomDate(1),
    });
  }
  return comments;
};
const generateCard = () => {
  // comments, inWatchList, isWatched, isFavorite


  const countries = [`USA`, `Germany`, `France`, `Italy`];
  const genres = [`Drama`, `Film-Noir`, `Mystery`, `Comedy`, `Horror`, `Thriller`, `Action`];
  const duration = getRandomInteger(80, 180);
  const photos = [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`,
  ];
  const titles = [
    `The Dance of Life`,
    `Sagebrush Trail`,
    `The Man with the Golden Arm`,
    `Santa Claus Conquers the Martians`,
    `Popeye the Sailor Meets Sindbad the Sailor`,
    `The Great Flamarion`,
    `Made for Each Other`,
  ];
  const directors = [
    `Stanley Kubrick`,
    `Alfred Hitchcock`,
    `Akira Kurosawa`,
    `Steven Spielberg`,
    `Martin Scorsese`,
    `Quentin Tarantino`,
    `Ingmar Bergman`,
  ];

  const writers = [
    `Katharine Hepburn`,
    `Bette Davis`,
    `Audrey Hepburn`,
    `Ingrid Bergman`,
    `Greta Garbo`,
    `Marilyn Monroe`,
    `Elizabeth Taylor`,
    `Judy Garland`,
    `Marlene Dietrich`,
  ];
  const title = getRandomArrayItem(titles);

  return {
    title,
    titleOriginal: title,
    rating: getRandomInteger(100, 1000) / 100,
    director: getRandomArrayItem(directors),
    actors: getSetOfItemsFromArray(actors),
    writers: getSetOfItemsFromArray(writers),
    date: getRandomDate(),
    country: getRandomArrayItem(countries),
    duration: `${Math.floor(duration / 60)}h ${(duration % 60)}m`,
    genres: getSetOfItemsFromArray(genres),
    photo: getRandomArrayItem(photos),
    description: getSetOfItemsFromArray(lorem, 1, 3),
    comments: generateComments(),
    inWatchList: Math.random() > 0.5,
    isWatched: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5
  };
};

const generateCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateCard);
};
export {generateCards};

import {createMemoryHistory} from "history";
import configureStore from "redux-mock-store";

const fakeFilm = {
  id: 1,
  name: `Macbeth`,
  description: `fake description`,
  rating: 3.3,
  scoresCount: 48798,
  director: `Justin Kurzel`,
  starring: [
    `Michael Fassbender`,
    `Marion Cotillard`,
    `Jack Madigan`
  ],
  posterImage: `fakeURL`,
  previewImage: `fakeURL`,
  backgroundImage: `fakeURL`,
  backgroundColor: `#F1E9CE`,
  runTime: 113,
  genre: `Drama`,
  released: 2015,
  isFavorite: false,
  videoLink: `fakeLink`,
  previewVideoLink: `fakeLink`
};

const fakeReviews = [
  {
    "id": 1,
    "user": {
      "id": 6,
      "name": `Zak`
    },
    "rating": 1.4,
    "comment": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    "date": `2021-03-07T08:04:28.658Z`
  },
  {
    "id": 2,
    "user": {
      "id": 3,
      "name": `Mike`
    },
    "rating": 5.3,
    "comment": `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    "date": `2020-01-02T14:55:15.328Z`
  },
  {
    "id": 3,
    "user": {
      "id": 11,
      "name": `Tom`
    },
    "rating": 9.2,
    "comment": `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    "date": `2021-04-01T02:21:33.021Z`
  },
];

const history = createMemoryHistory();

const mockStore = configureStore({});

export {
  fakeFilm,
  history,
  mockStore,
  fakeReviews,
};

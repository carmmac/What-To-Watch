import {createMemoryHistory} from "history";

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

const history = createMemoryHistory();

export {
  fakeFilm,
  history,
};

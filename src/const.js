const INITIAL_FILMS_VISIBLE_NUM = 8;
const FILMS_TO_SHOW_NUM = 8;
const DEFAULT_RATING = 3;
const RatingScore = {
  MIN: 1,
  MAX: 10,
};
const FilmPageTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};
const ALL_GENRES = `All genres`;
const DEFAULT_GENRE = ALL_GENRES;
const genres = [
  `Action`,
  `Drama`,
  `Adventure`,
  `Crime`,
  `Comedy`,
  `Fantasy`,
  `Thriller`,
];
const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  WAITING_AUTH: `WAITING_AUTH`,
};
const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films/:id`,
  REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
};
const APIRoute = {
  FILMS: `/films/`,
  PROMO_FILM: `/films/promo`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  REVIEWS: `/comments/`,
  FAVORITE: `/favorite/`,
};
const FilmsListLocation = {
  MAIN: `MAIN`,
  FILM_PAGE: `FILM_PAGE`,
  USER_LIST: `USER_LIST`,
};

export {
  INITIAL_FILMS_VISIBLE_NUM,
  FILMS_TO_SHOW_NUM,
  DEFAULT_RATING,
  RatingScore,
  FilmPageTab,
  DEFAULT_GENRE,
  ALL_GENRES,
  genres,
  AuthorizationStatus,
  AppRoute,
  APIRoute,
  FilmsListLocation,
};

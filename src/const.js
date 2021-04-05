const INITIAL_FILMS_VISIBLE_NUM = 8;
const FILMS_TO_SHOW_PER_CLICK_NUM = 8;
const DEFAULT_RATING = 3;
const SIMILAR_FILMS_VISIBLE_NUM = 4;
const GENRES_MAX_VISIBLE_NUM = 9;
const START_PREVIEW_PLAYER_TIMEOUT = 1000;
const REDIRECT_AFTER_REVIEW_POST_TIMEOUT = 1000;
const REVIEW_TEXT_MIN_LENGTH = 50;
const REVIEW_TEXT_MAX_LENGTH = 400;
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
const DescriptionBlockVersion = {
  FILM_PAGE: `FILM_PAGE`,
};
const FilmRatingText = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};
const FilmRatingLevel = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  AWESOME: 10,
};
const RequestStatus = {
  VOID: `VOID`,
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
};

const ComponentStyle = {
  FILM_CARD_IMG: {
    width: `280px`,
    height: `175px`,
  },
  POSTER_IMG: {
    width: `218px`,
    height: `327px`,
  },
  POSTER_IMG_BIG: {
    width: `273px`,
    height: `410px`,
  },
  USER_AVATAR: {
    width: `63px`,
    height: `63px`,
  },
};

export {
  INITIAL_FILMS_VISIBLE_NUM,
  FILMS_TO_SHOW_PER_CLICK_NUM,
  DEFAULT_RATING,
  SIMILAR_FILMS_VISIBLE_NUM,
  GENRES_MAX_VISIBLE_NUM,
  START_PREVIEW_PLAYER_TIMEOUT,
  REDIRECT_AFTER_REVIEW_POST_TIMEOUT,
  REVIEW_TEXT_MIN_LENGTH,
  REVIEW_TEXT_MAX_LENGTH,
  RatingScore,
  FilmPageTab,
  DEFAULT_GENRE,
  ALL_GENRES,
  AuthorizationStatus,
  AppRoute,
  APIRoute,
  DescriptionBlockVersion,
  FilmRatingText,
  FilmRatingLevel,
  RequestStatus,
  ComponentStyle,
};

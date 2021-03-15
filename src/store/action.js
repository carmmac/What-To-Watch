import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  GENRE_SELECT: `main/genreSelect`,
  GET_FILMS: `data/getFilms`,
  GET_PROMO_FILM: `data/getPromoFilm`,
  REQUIRED_AUTH: `user/requiredAuthorization`,
  GET_FILM: `data/getFilm`,
  GET_REVIEWS: `data/getReviews`,
  CLEAR_DATA: `filmPage/clearData`,
};

const genreSelect = createAction(ActionType.GENRE_SELECT, (genre) => ({payload: genre}));

const getFilmsList = createAction(ActionType.GET_FILMS, (films) => ({payload: films}));

const getPromoFilm = createAction(ActionType.GET_PROMO_FILM, (promoFilm) => ({payload: promoFilm}));

const getFilm = createAction(ActionType.GET_FILM, (film) => ({payload: film}));

const getReviews = createAction(ActionType.GET_REVIEWS, (reviews) => ({payload: reviews}));

const clearData = createAction(ActionType.CLEAR_DATA);

const requireAuthorization = createAction(ActionType.REQUIRED_AUTH, (status), ({payload: status}));

export {
  genreSelect,
  getFilmsList,
  getPromoFilm,
  getFilm,
  getReviews,
  clearData,
  requireAuthorization,
};

import {createReducer} from "@reduxjs/toolkit";
import {RequestStatus} from "../../const";
import {clearData, getFavoriteFilms, getFilm, getFilmsList, getPromoFilm, getReviews, postFavoriteFilm, setGoodRequest, setBadRequest, resetRequestStatus} from "../action";

export const initialState = {
  promoFilm: undefined,
  film: undefined,
  films: [],
  favoriteFilms: [],
  reviews: [],
  genres: [],
  isLoadedIndicator: {
    areFilmsLoaded: false,
    ispromoFilmLoaded: false,
    isFilmLoaded: false,
    areReviewsLoaded: false,
    areFavoriteFilmsLoaded: false,
  },
  requestStatus: RequestStatus.VOID,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(getFilmsList, (state, action) => {
    state.films = action.payload;
    state.isLoadedIndicator.areFilmsLoaded = true;
    state.genres = [...new Set(action.payload.reduce((acc, film) => {
      acc.push(film.genre);
      return acc;
    }, []))];
  })
  .addCase(getPromoFilm, (state, action) => {
    state.promoFilm = action.payload;
    state.isLoadedIndicator.ispromoFilmLoaded = true;
  })
  .addCase(getFilm, (state, action) => {
    state.film = action.payload;
    state.isLoadedIndicator.isFilmLoaded = true;
  })
  .addCase(getReviews, (state, action) => {
    state.reviews = action.payload;
    state.isLoadedIndicator.areReviewsLoaded = true;
  })
  .addCase(clearData, (state) => {
    state.film = initialState.film;
    state.reviews = initialState.reviews;
    state.isLoadedIndicator.isFilmLoaded = false;
    state.isLoadedIndicator.areReviewsLoaded = false;
  })
  .addCase(getFavoriteFilms, (state, action) => {
    state.favoriteFilms = action.payload;
    state.isLoadedIndicator.areFavoriteFilmsLoaded = true;
  })
  .addCase(postFavoriteFilm, (state, action) => {
    state.favoriteFilms.push(action.payload);
  })
  .addCase(setBadRequest, (state) => {
    state.requestStatus = RequestStatus.ERROR;
  })
  .addCase(setGoodRequest, (state) => {
    state.requestStatus = RequestStatus.SUCCESS;
  })
  .addCase(resetRequestStatus, (state) => {
    state.requestStatus = initialState.requestStatus;
  });
});

export default dataReducer;

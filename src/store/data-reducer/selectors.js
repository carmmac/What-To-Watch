import {createSelector} from "reselect";

const getPromoFilm = createSelector(
    (state) => state.DATA.promoFilm,
    (promoFilm) => promoFilm
);

const getFilms = createSelector(
    (state) => state.DATA.films,
    (films) => films
);

const getFilmsFilteredByGenre = createSelector(
    [
      getFilms,
      (_, genre) => genre,
    ],
    (films, genre) => films.filter((film) => film.genre === genre)
);

const getFilmsSimilar = createSelector(
    [
      getFilms,
      (_, genre, id) => ({genre, id}),
    ],
    (films, {genre, id}) => films.filter((film) => film.genre === genre && film.id !== id)
);

const getFavoriteFilms = createSelector(
    (state) => state.DATA.favoriteFilms,
    (favoriteFilms) => favoriteFilms
);

const getFilm = createSelector(
    (state) => state.DATA.film,
    (film) => film
);

const getReviews = createSelector(
    (state) => state.DATA.reviews,
    (reviews) => reviews
);

const makeGetFilms = () => getFilms;
const makeGetFilmsFilteredByGenre = () => getFilmsFilteredByGenre;
const makeGetFilmsSimilar = () => getFilmsSimilar;
const makeGetFilm = () => getFilm;
const makeGetFavoriteFilms = () => getFavoriteFilms;

const makeGetAreFilmsLoadedIndicator = () => (
  createSelector(
      (state) => state.DATA.isLoadedIndicator.areFilmsLoaded,
      (areFilmsLoaded) => areFilmsLoaded,
  )
);

const makeGetIsPromoFilmLoadedIndicator = () => (
  createSelector(
      (state) => state.DATA.isLoadedIndicator.ispromoFilmLoaded,
      (ispromoFilmLoaded) => ispromoFilmLoaded,
  )
);

const makeGetIsFilmLoadedIndicator = () => (
  createSelector(
      (state) => state.DATA.isLoadedIndicator.isFilmLoaded,
      (isFilmLoaded) => isFilmLoaded,
  )
);

const getAreReviewsLoadedIndicator = createSelector(
    (state) => state.DATA.isLoadedIndicator.areReviewsLoaded,
    (areReviewsLoaded) => areReviewsLoaded,
);

const makeGetAreFavoriteFilmsLoadedIndicator = () => (
  createSelector(
      (state) => state.DATA.isLoadedIndicator.areFavoriteFilmsLoaded,
      (areFavoriteFilmsLoaded) => areFavoriteFilmsLoaded
  )
);

const getHasRequestSucceededIndicator = createSelector(
    (state) => state.DATA.hasRequestSucceededIndicator,
    (hasRequestSucceededIndicator) => hasRequestSucceededIndicator,
);

export {
  getPromoFilm,
  getFilms,
  getFilmsFilteredByGenre,
  getFilmsSimilar,
  getReviews,

  makeGetFilms,
  makeGetFilmsFilteredByGenre,
  makeGetFilmsSimilar,
  makeGetFavoriteFilms,
  makeGetIsFilmLoadedIndicator,
  makeGetFilm,

  makeGetAreFilmsLoadedIndicator,
  makeGetIsPromoFilmLoadedIndicator,
  getAreReviewsLoadedIndicator,
  makeGetAreFavoriteFilmsLoadedIndicator,
  getHasRequestSucceededIndicator,
};

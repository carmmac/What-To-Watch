const ActionType = {
  GENRE_SELECT: `main/genreSelect`,
  LOAD_FILMS: `data/loadFilms`,
  GET_GENRES: `data/getGenres`,
  GET_PROMO_FILM: `data/getPromoFilm`,
  REQUIRED_AUTH: `user/requiredAuthorization`,
  GET_FILM: `data/getFilm`,
  CLEAR_FILM: `filmPage/clearFilm`,
};

const ActionCreator = {
  genreSelect: (genre) => ({
    type: ActionType.GENRE_SELECT,
    payload: genre,
  }),
  fetchFilmsList: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  getGenresFromFilms: (films) => ({
    type: ActionType.GET_GENRES,
    payload: films,
  }),
  getPromoFilm: (promoFilm) => ({
    type: ActionType.GET_PROMO_FILM,
    payload: promoFilm,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTH,
    payload: status,
  }),
  getFilm: (film) => ({
    type: ActionType.GET_FILM,
    payload: film,
  }),
  clearFilm: () => ({
    type: ActionType.CLEAR_FILM,
  }),
};

export {
  ActionType,
  ActionCreator,
};

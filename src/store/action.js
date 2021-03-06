const ActionType = {
  GENRE_SELECT: `main/genreSelect`,
  FILTER_FILMS: `main/filterFilms`,
  LOAD_FILMS: `data/loadFilms`,
  GET_GENRES: `data/getGenres`,
  GET_PROMO_FILM: `data/getPromoFilm`,
};

const ActionCreator = {
  genreSelect: (genre) => ({
    type: ActionType.GENRE_SELECT,
    payload: genre,
  }),
  filterFilmsByGenre: (genre) => ({
    type: ActionType.FILTER_FILMS,
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
};

export {
  ActionType,
  ActionCreator,
};

const ActionType = {
  GENRE_SELECT: `main/genreSelect`,
  FILTER_FILMS: `main/filterFilms`,
  LOAD_FILMS: `data/loadFilms`,
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
};

export {
  ActionType,
  ActionCreator,
};

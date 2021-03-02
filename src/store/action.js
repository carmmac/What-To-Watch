const ActionType = {
  GENRE_SELECT: `main/genreSelect`,
  FILTER_FILMS: `main/filterFilms`,
  LOAD_MORE_FILMS: `main/loadMoreFilms`,
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
};

export {
  ActionType,
  ActionCreator,
};

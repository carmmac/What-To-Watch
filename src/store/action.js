const ActionType = {
  GENRE_SELECT: `main/genreSelect`,
  FILTER_FILMS: `main/getFilms`,
};

const ActionCreator = {
  genreSelect: (genre) => ({
    type: ActionType.GENRE_SELECT,
    payload: genre,
  }),
  filterFilmsByGenre: (films, genre) => ({
    type: ActionType.FILTER_FILMS,
    payload: films.filter((film) => film.genre === genre),
  })
};

export {
  ActionType,
  ActionCreator,
};

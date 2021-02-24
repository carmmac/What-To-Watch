const ActionType = {
  GENRE_SELECT: `main/genreSelect`,
  GET_FILMS: `main/getFilms`,
};

const ActionCreator = {
  genreSelect: (genre) => ({
    type: ActionType.GENRE_SELECT,
    payload: genre,
  })
};

export {
  ActionType,
  ActionCreator,
};

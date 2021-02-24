const ActionType = {
  GENRE_SELECT: `main/genreSelect`,
  GET_FILMS: `main/getFilms`,
};

const ActionCreator = {
  genreSelect: (genreValue) => ({
    type: ActionType.GENRE_SELECT,
    payload: genreValue,
  })
};

export {
  ActionType,
  ActionCreator,
};

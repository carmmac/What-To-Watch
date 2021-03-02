import {FILMS_TO_LOAD_NUM} from "../const";

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
  loadMoreFilms: () => ({
    type: ActionType.LOAD_MORE_FILMS,
    payload: FILMS_TO_LOAD_NUM,
  })
};

export {
  ActionType,
  ActionCreator,
};

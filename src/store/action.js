import {FILMS_TO_SHOW} from "../const";

const ActionType = {
  GENRE_SELECT: `main/genreSelect`,
  FILTER_FILMS: `main/getFilms`,
  LOAD_MORE_FILMS: `main/loadMoreFilms`,
};

const ActionCreator = {
  genreSelect: (genre) => ({
    type: ActionType.GENRE_SELECT,
    payload: genre,
  }),
  filterFilmsByGenre: (films, genre) => ({
    type: ActionType.FILTER_FILMS,
    payload: films.filter((film) => film.genre === genre),
  }),
  loadMoreFilms: () => ({
    type: ActionType.LOAD_MORE_FILMS,
    payload: FILMS_TO_SHOW,
  })
};

export {
  ActionType,
  ActionCreator,
};

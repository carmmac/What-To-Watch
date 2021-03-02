import films from "../mock/films-mock";
import reviews from '../mock/reviews-mock.js';
import {getRandomNum} from "../utils";
import {ActionType} from "./action";
import {DEFAULT_GENRE} from "../const";

const genres = new Set(films.reduce((acc, film) => {
  acc.push(film.genre);
  return acc;
}, []));

const initialState = {
  promoFilm: films[Math.floor(getRandomNum(0, films.length - 1))],
  currentGenre: DEFAULT_GENRE,
  films,
  genres: [DEFAULT_GENRE, ...genres],
  filmsToShow: films,
  reviews,
  filmsVisibleNum: 8,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE_SELECT:
      return {
        ...state,
        currentGenre: action.payload
      };
    case ActionType.FILTER_FILMS:
      return {
        ...state,
        filmsToShow: state.currentGenre === DEFAULT_GENRE ? films : films.filter((film) => film.genre === action.payload),
      };
    case ActionType.LOAD_MORE_FILMS:
      return {
        ...state,
        filmsVisibleNum: state.filmsVisibleNum + action.payload,
      };
  }
  return state;
};

export {
  reducer,
};

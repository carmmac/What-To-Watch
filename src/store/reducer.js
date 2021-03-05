import films from "../mock/films-mock";
import reviews from '../mock/reviews-mock.js';
import {getRandomNum} from "../utils";
import {ActionType} from "./action";
import {DEFAULT_GENRE, FILMS_TO_SHOW_NUM, INITIAL_FILMS_VISIBLE_NUM} from "../const";

const initialState = {
  promoFilm: films[Math.floor(getRandomNum(0, films.length - 1))],
  defaultGenre: DEFAULT_GENRE,
  currentGenre: DEFAULT_GENRE,
  films: [],
  genres: [],
  reviews,
  initialFilmsVisibleNum: INITIAL_FILMS_VISIBLE_NUM,
  filmsToShowNum: FILMS_TO_SHOW_NUM,
  isDataLoadFinished: false,
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
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoadFinished: true,
      };
    case ActionType.GET_GENRES:
      return {
        ...state,
        genres: [DEFAULT_GENRE, ...new Set(action.payload.reduce((acc, film) => {
          acc.push(film.genre);
          return acc;
        }, []))],
      };
  }
  return state;
};

export {
  reducer,
};

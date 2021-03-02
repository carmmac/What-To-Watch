import films from "../mock/films-mock";
import reviews from '../mock/reviews-mock.js';
import {getRandomNum} from "../utils";
import {ActionType} from "./action";
import {DEFAULT_GENRE} from "../const";

const genres = films.reduce((acc, film) => {
  if (!acc.some((item) => item === film.genre)) {
    acc.push(film.genre);
  }
  return acc;
}, [DEFAULT_GENRE]);

const initialState = {
  promoFilm: films[Math.floor(getRandomNum(0, films.length - 1))],
  currentGenre: DEFAULT_GENRE,
  films,
  genres,
  filmsToShow: films,
  reviews,
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
  }
  return state;
};

export {
  reducer,
};

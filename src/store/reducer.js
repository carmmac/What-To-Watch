import films from "../mock/films-mock";
import reviews from '../mock/reviews-mock.js';
import {getRandomNum} from "../utils";
import {ActionType} from "./action";
import {defaultGenreTab} from "../const";

const genres = films.reduce((acc, film) => {
  if (!acc.some((item) => item === film.genre)) {
    acc.push(film.genre);
  }
  return acc;
}, [defaultGenreTab]);

const initialState = {
  promoFilm: films[Math.floor(getRandomNum(0, films.length - 1))],
  selectedGenreTab: defaultGenreTab,
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
        selectedGenreTab: action.payload
      };
    case ActionType.FILTER_FILMS:
      if (state.selectedGenreTab === defaultGenreTab) {
        return {
          ...initialState,
        };
      }
      return {
        ...state,
        filmsToShow: action.payload
      };
  }
  return state;
};

export {
  reducer,
};

import films from "../mock/films-mock";
import reviews from '../mock/reviews-mock.js';
import {getRandomNum} from "../utils";
import {ActionType} from "./action";
import {defaultGenreTab} from "../const";

const initialState = {
  promoFilm: films[Math.floor(getRandomNum(0, films.length - 1))],
  selectedGenreTab: defaultGenreTab,
  films,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE_SELECT:
      return {
        ...state,
        selectedGenreTab: action.payload
      };
    case ActionType.GET_FILMS:
      return {
        ...state,
        films: action.payload
      };
  }
  return state;
};

export {
  reducer,
};

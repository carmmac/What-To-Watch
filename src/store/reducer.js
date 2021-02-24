import films from "../mock/films-mock";
import {getRandomNum} from "../utils";
import {ActionType} from "./action";

const initialState = {
  promoFilm: films[Math.floor(getRandomNum(0, films.length - 1))],
  genre: `Drama`,
  films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE_SELECT:
      return {
        ...state,
        genre: action.payload
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

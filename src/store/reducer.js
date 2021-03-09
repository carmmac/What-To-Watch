import reviews from '../mock/reviews-mock.js';
import {ActionType} from "./action";
import {AuthorizationStatus, DEFAULT_GENRE, FILMS_TO_SHOW_NUM, INITIAL_FILMS_VISIBLE_NUM} from "../const";

const initialState = {
  promoFilm: undefined,
  currentGenre: DEFAULT_GENRE,
  films: [],
  genres: [],
  reviews,
  initialFilmsVisibleNum: INITIAL_FILMS_VISIBLE_NUM,
  filmsToShowNum: FILMS_TO_SHOW_NUM,
  isLoadedIndicator: {
    films: false,
    promoFilm: false,
  },
  authorizationStatus: AuthorizationStatus.WAITING_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE_SELECT:
      return {
        ...state,
        currentGenre: action.payload
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isLoadedIndicator: {
          ...state.isLoadedIndicator,
          films: true,
        },
      };
    case ActionType.GET_GENRES:
      return {
        ...state,
        genres: [DEFAULT_GENRE, ...new Set(action.payload.reduce((acc, film) => {
          acc.push(film.genre);
          return acc;
        }, []))],
      };
    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload,
        isLoadedIndicator: {
          ...state.isLoadedIndicator,
          promoFilm: true,
        },
      };
    case ActionType.REQUIRED_AUTH:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }
  return state;
};

export {
  reducer,
};

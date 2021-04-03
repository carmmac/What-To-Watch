import {ActionType} from '../action';
import {initialState} from './data-reducer';
import dataReducer from './data-reducer';
import {APIRoute} from '../../const';
import {createApi} from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import {fetchFilmsList} from '../api-actions';

const films = [{genre: `Action`}, {genre: `Drama`}];
const reviews = [{}, {}];

const api = createApi(() => {});
const apiMock = new MockAdapter(api);
const dispatch = jest.fn();

describe(`Reducer "Data"`, () => {
  it(`should return initial state without additional parameters`, () => {
    expect(dataReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`should restore initial state of film`, () => {
    const state = {
      film: {},
      reviews: [{}, {}],
      isLoadedIndicator: {
        isFilmLoaded: true,
        areReviewsLoaded: true,
      },
    };
    const clearDataAction = {type: ActionType.CLEAR_DATA};
    expect(dataReducer(state, clearDataAction))
      .toEqual({
        film: initialState.film,
        reviews: initialState.reviews,
        isLoadedIndicator: {
          isFilmLoaded: false,
          areReviewsLoaded: false,
        },
      });
  });

  it(`should update films after loading`, () => {
    const state = {
      films: [],
      genres: [],
      isLoadedIndicator: {
        areFilmsLoaded: false,
      },
    };
    const loadFilmsAction = {
      type: ActionType.GET_FILMS,
      payload: films,
    };
    expect(dataReducer(state, loadFilmsAction))
      .toEqual({
        films,
        genres: [films[0].genre, films[1].genre],
        isLoadedIndicator: {
          areFilmsLoaded: true,
        },
      });
  });

  it(`should update promo film after loading`, () => {
    const state = {
      promoFilm: undefined,
      isLoadedIndicator: {
        ispromoFilmLoaded: false,
      },
    };
    const loadPromoFilmAction = {
      type: ActionType.GET_PROMO_FILM,
      payload: films[0],
    };
    expect(dataReducer(state, loadPromoFilmAction))
      .toEqual({
        promoFilm: films[0],
        isLoadedIndicator: {
          ispromoFilmLoaded: true,
        },
      });
  });

  it(`should update film after loading`, () => {
    const state = {
      film: undefined,
      isLoadedIndicator: {
        isFilmLoaded: false,
      },
    };
    const loadFilmAction = {
      type: ActionType.GET_FILM,
      payload: films[0],
    };
    expect(dataReducer(state, loadFilmAction))
      .toEqual({
        film: films[0],
        isLoadedIndicator: {
          isFilmLoaded: true,
        },
      });
  });

  it(`should update reviews after loading`, () => {
    const state = {
      reviews: [],
      isLoadedIndicator: {
        areReviewsLoaded: false,
      },
    };
    const loadReviewsAction = {
      type: ActionType.GET_REVIEWS,
      payload: reviews,
    };
    expect(dataReducer(state, loadReviewsAction))
      .toEqual({
        reviews,
        isLoadedIndicator: {
          areReviewsLoaded: true,
        },
      });
  });

  it(`should update favorite films after loading`, () => {
    const state = {
      favoriteFilms: [],
      isLoadedIndicator: {
        areFavoriteFilmsLoaded: false,
      },
    };
    const loadFavoriteFilmsAction = {
      type: ActionType.GET_FAVORITE_FILMS,
      payload: films,
    };
    expect(dataReducer(state, loadFavoriteFilmsAction))
      .toEqual({
        favoriteFilms: films,
        isLoadedIndicator: {
          areFavoriteFilmsLoaded: true,
        },
      });
  });
});

describe(`Reducer "Data" async`, () => {
  it(`should make a correct API call to /films`, () => {
    const filmsLoader = fetchFilmsList();

    apiMock.onGet(APIRoute.FILMS).reply(200, films);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_FILMS,
          payload: films,
        });
      });
  });
});

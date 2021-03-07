import {APIRoute, AuthorizationStatus} from "../const";
import {adaptFilmToClient} from "../utils";
import {ActionCreator} from "./action";

const fetchFilmsList = () => (next, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((film) => adaptFilmToClient(film)))
    .then((films) => next(ActionCreator.fetchFilmsList(films)))
    .catch(() => {})
);

const fetchPromoFilm = () => (next, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => adaptFilmToClient(data))
    .then((promoFilm) => next(ActionCreator.getPromoFilm(promoFilm)))
    .catch(() => {})
);

const chechAuth = () => (next, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => next(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({email, password}) => (next, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => next(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const logout = () => (next, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => next(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export {
  fetchFilmsList,
  fetchPromoFilm,
  chechAuth,
  login,
  logout,
};

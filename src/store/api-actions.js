import {adaptFilmToClient} from "../utils";
import {ActionCreator} from "./action";

const fetchFilmsList = () => (next, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => data.map((film) => adaptFilmToClient(film)))
    .then((films) => next(ActionCreator.fetchFilmsList(films)))
    .catch(() => {})
);

const fetchPromoFilm = () => (next, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => adaptFilmToClient(data))
    .then((promoFilm) => next(ActionCreator.getPromoFilm(promoFilm)))
    .catch(() => {})
);

export {
  fetchFilmsList,
  fetchPromoFilm,
};

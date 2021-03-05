import {adaptFilmToClient} from "../utils";
import {ActionCreator} from "./action";

const fetchFilmsList = () => (next, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => data.map((film) => adaptFilmToClient(film)))
    .then((films) => next(ActionCreator.fetchFilmsList(films)))
    .catch(() => {})
);

export {
  fetchFilmsList,
};

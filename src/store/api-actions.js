import {ActionCreator} from "./action";

const fetchFilmsList = () => (next, _getState, api) => (
  api.get(`/films`)
    .then(({films}) => next(ActionCreator.fetchFilmsList(films)))
    .catch(() => {})
);

export {
  fetchFilmsList,
};

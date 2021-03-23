import {createSelector} from "reselect";

const getGenres = createSelector(
    (state) => state.DATA.genres,
    (genres) => genres
);

export {
  getGenres,
};

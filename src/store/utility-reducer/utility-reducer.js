import {createReducer} from "@reduxjs/toolkit";
import {DEFAULT_GENRE, FILMS_TO_SHOW_PER_CLICK_NUM, INITIAL_FILMS_VISIBLE_NUM} from "../../const";
import {genreSelect} from "../action";

const initialState = {
  currentGenre: DEFAULT_GENRE,
  initialFilmsVisibleNum: INITIAL_FILMS_VISIBLE_NUM,
  filmsToShowPerClickNum: FILMS_TO_SHOW_PER_CLICK_NUM,
};

const utilityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(genreSelect, (state, action) => {
      state.currentGenre = action.payload;
    });
});

export default utilityReducer;

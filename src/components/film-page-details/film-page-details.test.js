import React from "react";
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import FilmPageDetails from './film-page-details';
import {fakeFilm, history} from "../../utils-testing";
import {humanizeTimeForDescription} from "../../utils";

test(`FilmPageDetails renders itself correctly`, () => {
  render(
      <Router history={history} >
        <FilmPageDetails film={fakeFilm} />
      </Router>
  );

  expect(screen.getByText(fakeFilm.director)).toBeInTheDocument();
  expect(screen.getByText(humanizeTimeForDescription(fakeFilm.runTime))).toBeInTheDocument();
  expect(fakeFilm.starring.every((item) => screen.getByText(item)));
  expect(screen.getByText(fakeFilm.genre)).toBeInTheDocument();
  expect(screen.getByText(fakeFilm.released)).toBeInTheDocument();
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import FilmPageOverview from './film-page-overview';
import {humanizeFilmRating} from '../../utils';
import {fakeFilm, history} from '../../utils-testing';

it(`FilmPageOverview renders itself correctly`, () => {
  render(
      <Router history={history}>
        <FilmPageOverview film={fakeFilm} />
      </Router>
  );
  const filmScoresCountTextContent = `${fakeFilm.scoresCount} ratings`;
  const filmDirectorTextContent = `Director: ${fakeFilm.director}`;
  const filmStarringTextContent = `Starring: ${fakeFilm.starring.join(`, `)} and others`;

  expect(screen.getByText(fakeFilm.rating)).toBeInTheDocument();
  expect(screen.getByText(humanizeFilmRating(fakeFilm.rating))).toBeInTheDocument();
  expect(screen.getByText(filmScoresCountTextContent)).toBeInTheDocument();
  expect(screen.getByText(fakeFilm.description)).toBeInTheDocument();
  expect(screen.getByText(filmDirectorTextContent)).toBeInTheDocument();
  expect(screen.getByText(filmStarringTextContent)).toBeInTheDocument();
});

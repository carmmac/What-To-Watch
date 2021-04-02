import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {fakeFilm, history} from '../../utils-testing';
import FilmPageTabs from './film-page-tabs';

test(`FilmPageTabs renders itself correctly`, () => {
  render(
      <Router history={history}>
        <FilmPageTabs film={fakeFilm} filmId={fakeFilm.id}/>
      </Router>
  );
  expect(screen.getByRole(`navigation`));
});

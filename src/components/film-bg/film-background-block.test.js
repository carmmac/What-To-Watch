import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import FilmBackgroundBlock from './film-background-block';
import {history} from '../../utils-testing';

const backgroundImage = `fake`;
const name = `fake`;

test(`FilmBackgroundBlock renders itself correctly`, () => {
  render(
      <Router history={history}>
        <FilmBackgroundBlock backgroundImage={backgroundImage} name={name} />
      </Router>
  );
  expect(screen.getByRole(`img`)).toBeInTheDocument();
  expect(screen.getByAltText(name)).toBeInTheDocument();
});

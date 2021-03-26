import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmBackgroundBlock from './film-background-block';

const backgroundImage = `fake`;
const name = `fake`;

test(`FilmBackgroundBlock render test`, () => {
  const history = createMemoryHistory();
  const {getByRole} = render(
      <Router history={history}>
        <FilmBackgroundBlock backgroundImage={backgroundImage} name={name} />
      </Router>
  );
  const imageElement = getByRole(`img`);
  expect(imageElement).toBeInTheDocument();
});

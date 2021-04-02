import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {fakeFilm, history} from '../../utils-testing';
import FilmsList from './films-list';

const useDispatchSpy = jest.spyOn(redux, `useDispatch`);
const mockDispatch = jest.fn();
useDispatchSpy.mockReturnValue(mockDispatch);

test(`renders films`, () => {
  const {container} = render(
      <Router history={history}>
        <FilmsList films={[fakeFilm]} handleFilmCardClick={jest.fn()} />
      </Router>
  );
  expect(container.firstChild).toHaveClass(`catalog__movies-list`);
});

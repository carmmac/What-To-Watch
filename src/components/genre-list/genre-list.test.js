import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import GenreList from './genre-list';
import {DEFAULT_GENRE} from '../../const';
import {history, mockStore} from '../../utils-testing';

let store;
const fakeGenres = [DEFAULT_GENRE, `Drama`, `Action`, `Comedy`];
const fakeCurrentGenre = `Comedy`;

describe(`GenreList`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  beforeEach(() => {
    store = mockStore({
      DATA: {
        genres: fakeGenres,
      }
    });
  });

  it(`renders itself correctly`, () => {
    const activeGenreTabClassName = `catalog__genres-item--active`;
    render(
        <Provider store={store}>
          <Router history={history}>
            <GenreList
              currentGenre={fakeCurrentGenre}
              handleGenreSelect={jest.fn()}
            />
          </Router>
        </Provider>
    );
    expect(fakeGenres.every((item) => screen.getByText(item)));
    expect(screen.getByText(fakeCurrentGenre).parentElement.classList.contains(activeGenreTabClassName)).toBe(true);
  });

  it(`should select new genre when clicked`, () => {
    const genreSelectHandlerdler = jest.fn();
    render(
        <Provider store={store}>
          <Router history={history}>
            <GenreList
              currentGenre={fakeCurrentGenre}
              handleGenreSelect={genreSelectHandlerdler}
            />
          </Router>
        </Provider>
    );
    expect(fakeGenres.every((item) => {
      const genreTabElement = screen.getByText(item);
      fireEvent.click(genreTabElement);
      expect(genreSelectHandlerdler).toBeCalled();
    }));
  });
});

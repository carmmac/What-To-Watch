import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import {fakeFilm, history, mockStore} from '../../utils-testing';
import {AppRoute} from '../../const';
import FilmCard from './film-card';

const store = mockStore({});
let mockDispatch;
let useDispatchSpy;

describe(`FilmCard`, () => {

  beforeEach(() => {
    useDispatchSpy = jest.spyOn(redux, `useDispatch`);
    mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);
    history.push(AppRoute.ROOT);
  });
  afterEach(() => {
    useDispatchSpy.mockClear();
  });

  it(`renders itself correctly`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmCard {...fakeFilm}/>
          </Router>
        </Provider>
    );
    expect(screen.getByRole(`img`)).toHaveAttribute(`src`, fakeFilm.previewImage);
    expect(screen.getByAltText(fakeFilm.name)).toBeInTheDocument();
    expect(screen.getByText(fakeFilm.name)).toBeInTheDocument();
  });

  it(`dispatches an action after user click on film title`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmCard {...fakeFilm}/>
          </Router>
        </Provider>
    );
    fireEvent.click(screen.getByText(fakeFilm.name));
    expect(mockDispatch).toBeCalled();
  });

  it(`should select new film id after user click on film title`, () => {
    const filmCardClickHandler = jest.fn();
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmCard handleFilmCardClick={filmCardClickHandler} {...fakeFilm}/>
          </Router>
        </Provider>
    );
    fireEvent.click(screen.getByText(fakeFilm.name));
    expect(filmCardClickHandler).toBeCalled();
    expect(filmCardClickHandler).toHaveBeenCalledWith(fakeFilm.id);
  });

  it(`should redirect to film page after user click on film title`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmCard {...fakeFilm}/>
          </Router>
        </Provider>
    );
    fireEvent.click(screen.getByText(fakeFilm.name));
    expect(history.location.pathname).toBe(`/films/${fakeFilm.id}`);
  });
});

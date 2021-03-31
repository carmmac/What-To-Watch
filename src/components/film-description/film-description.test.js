import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import {fakeFilm, history, mockStore} from '../../utils-testing';
import {AuthorizationStatus, DescriptionBlockVersion} from '../../const';
import FilmDescription from './film-description';


let store;
const fakeFavoriteFilms = [{id: 0, isFavorite: true}, {id: 2, isFavorite: true}, {id: 3, isFavorite: true}];
const useDispatchSpy = jest.spyOn(redux, `useDispatch`);
const mockDispatch = jest.fn();
useDispatchSpy.mockReturnValue(mockDispatch);
jest.spyOn(redux, `useSelector`);

describe(`FilmDescription for unauthorized user`, () => {

  beforeAll(() => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {favoriteFilms: fakeFavoriteFilms}
    });
  });

  it(`renders itself correctly`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmDescription film={fakeFilm} />
          </Router>
        </Provider>
    );
    expect(screen.getByText(fakeFilm.name)).toBeInTheDocument();
    expect(screen.getByText(fakeFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(fakeFilm.released)).toBeInTheDocument();
    expect(screen.getByRole(`link`)).toHaveTextContent(`Play`);
    expect(screen.queryByText(`My list`)).not.toBeInTheDocument();
    expect(screen.queryByText(`Add review`)).not.toBeInTheDocument();
  });

  it(`redirects to film player page after "Play" button click`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmDescription film={fakeFilm} />
          </Router>
        </Provider>
    );

    const linkToPlayerElement = screen.getByText(`Play`).parentElement;
    fireEvent.click(linkToPlayerElement);
    expect(history.location.pathname).toBe(`/player/${fakeFilm.id}`);
  });
});


describe(`FilmDescription for authorized user`, () => {
  const fakeButtonsLabels = [`Play`, `My list`, `Add Review`];

  beforeAll(() => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {favoriteFilms: fakeFavoriteFilms}
    });
  });

  it(`renders itself correctly at main page`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmDescription film={fakeFilm} />
          </Router>
        </Provider>
    );
    expect(screen.getByText(fakeFilm.name)).toBeInTheDocument();
    expect(screen.getByText(fakeFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(fakeFilm.released)).toBeInTheDocument();
    expect(screen.getAllByRole(`link`).every((link, i) => {
      expect(link).toHaveTextContent(fakeButtonsLabels[i]);
    }));
  });

  it(`renders itself correctly at film page`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmDescription
              film={fakeFilm}
              version={DescriptionBlockVersion.FILM_PAGE}
            />
          </Router>
        </Provider>
    );
    expect(screen.getByText(fakeFilm.name)).toBeInTheDocument();
    expect(screen.getByText(fakeFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(fakeFilm.released)).toBeInTheDocument();
    expect(screen.getAllByRole(`link`).every((link, i) => {
      expect(link).toHaveTextContent(fakeButtonsLabels[i]);
    }));
  });

  it(`redirects to review form page after "Add review" button click`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmDescription
              film={fakeFilm}
              version={DescriptionBlockVersion.FILM_PAGE}
            />
          </Router>
        </Provider>
    );

    fireEvent.click(screen.getByText(`Add review`));
    expect(history.location.pathname).toBe(`/${fakeFilm.id}/review`);
  });
});


describe(`FilmDescription for authorized user - user actions`, () => {
  afterEach(() => useDispatchSpy.mockClear());

  it(`dispatches an action after My list button click`, () => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {favoriteFilms: []}
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmDescription film={fakeFilm} />
          </Router>
        </Provider>
    );

    const myListButtonElement = screen.getByText(`My list`).parentElement;
    fireEvent.click(myListButtonElement);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it(`should not dispatch an action after My list button click, if film is already favorite`, () => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {favoriteFilms: [fakeFilm]}
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmDescription film={fakeFilm} />
          </Router>
        </Provider>
    );

    const myListButtonElement = screen.getByText(`My list`).parentElement;
    fireEvent.click(myListButtonElement);
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});

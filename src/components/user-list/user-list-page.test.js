import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import {fakeFilm, history, mockStore} from '../../utils-testing';
import {AuthorizationStatus} from '../../const';
import UserListPage from './user-list-page';

let store;
let mockDispatch;
let useDispatchSpy;

describe(`UserListPage`, () => {
  beforeEach(() => {
    useDispatchSpy = jest.spyOn(redux, `useDispatch`);
    mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);
  });
  afterEach(() => {
    useDispatchSpy.mockClear();
  });
  it(`renders itself correctly before favorite films are loaded`, () => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {
        favoriteFilms: [],
        isLoadedIndicator: {
          areFavoriteFilmsLoaded: false,
        },
      }
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <UserListPage />
          </Router>
        </Provider>
    );
    expect(screen.queryByText(`My list`)).not.toBeInTheDocument();
    expect(screen.queryByText(`Catalog`)).not.toBeInTheDocument();
  });

  it(`renders itself correctly with favorite films`, () => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {
        favoriteFilms: [fakeFilm],
        isLoadedIndicator: {
          areFavoriteFilmsLoaded: true,
        },
      }
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <UserListPage />
          </Router>
        </Provider>
    );
    expect(screen.getByText(`My list`)).toBeInTheDocument();
    expect(screen.getByText(`Catalog`)).toBeInTheDocument();
  });
});

import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import {history, mockStore} from '../../utils-testing';
import {AppRoute, AuthorizationStatus} from '../../const';
import UserBlock from './user-block';

let store;
let mockDispatch;
let useDispatchSpy;

describe(`UserBlock for unauthorized user`, () => {
  beforeAll(() => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });
  });
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
            <UserBlock />
          </Router>
        </Provider>
    );
    expect(screen.getByText(`Sign in`)).toBeInTheDocument();
    expect(screen.queryByAltText(`User avatar`)).not.toBeInTheDocument();
  });

  it(`should redirect to login form page when link clicked`, () => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <UserBlock />
          </Router>
        </Provider>
    );
    fireEvent.click(screen.getByText(`Sign in`));
    expect(history.location.pathname).toBe(AppRoute.LOGIN);
  });
});


describe(`UserBlock for authorized user`, () => {
  beforeAll(() => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });
  });
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
            <UserBlock />
          </Router>
        </Provider>
    );
    expect(screen.queryByText(`Sign in`)).not.toBeInTheDocument();
    expect(screen.getByAltText(`User avatar`)).toBeInTheDocument();
    expect(screen.getByText(`Sign out`)).toBeInTheDocument();
  });

  it(`should redirect to favorites page when avatar clicked`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <UserBlock />
          </Router>
        </Provider>
    );
    fireEvent.click(screen.getByAltText(`User avatar`).parentElement);
    expect(history.location.pathname).toBe(AppRoute.MY_LIST);
  });

  it(`should dispatch an action when "Sing out" clicked`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <UserBlock />
          </Router>
        </Provider>
    );
    fireEvent.click(screen.getByText(`Sign out`));
    expect(mockDispatch).toBeCalled();
  });
});

import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import {history, mockStore} from '../../utils-testing';
import {AppRoute, AuthorizationStatus} from '../../const';
import NotFoundScreen from './not-found-screen';

let store;
let mockDispatch;
let useDispatchSpy;

test(`NotFoundScreen acts correctly`, () => {
  store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
  });
  useDispatchSpy = jest.spyOn(redux, `useDispatch`);
  mockDispatch = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatch);

  render(
      <Provider store={store}>
        <Router history={history}>
          <NotFoundScreen />
        </Router>
      </Provider>
  );
  expect(screen.getByText(`404 Not Found`));
  expect(screen.getByText(`Вернуться на главную`));
  fireEvent.click(screen.getByText(`Вернуться на главную`));
  expect(history.location.pathname).toBe(AppRoute.ROOT);

  useDispatchSpy.mockClear();
});

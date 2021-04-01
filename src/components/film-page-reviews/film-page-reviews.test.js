import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import {fakeFilm, fakeReviews, history, mockStore} from '../../utils-testing';
import {AppRoute, AuthorizationStatus} from '../../const';
import FilmPageReviews from './film-page-reviews';
import {humanizeDate} from '../../utils';

let store;
let mockDispatch;
let useDispatchSpy;

describe(`FilmPageReviews`, () => {
  beforeEach(() => {
    useDispatchSpy = jest.spyOn(redux, `useDispatch`);
    mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);
    history.push(AppRoute.ROOT);
  });
  afterEach(() => {
    useDispatchSpy.mockClear();
  });
  it(`acts correctly before reviews are loaded`, () => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {
        reviews: [],
        isLoadedIndicator: {
          areReviewsLoaded: false,
        },
      }
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmPageReviews id={fakeFilm.id}/>
          </Router>
        </Provider>
    );
    expect(screen.queryByRole(`list`)).not.toBeInTheDocument();
    expect(mockDispatch).toBeCalled();
    useDispatchSpy.mockClear();
  });

  it(`acts correctly with reviews`, () => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {
        reviews: fakeReviews,
        isLoadedIndicator: {
          areReviewsLoaded: true,
        },
      }
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmPageReviews id={fakeFilm.id}/>
          </Router>
        </Provider>
    );
    expect(mockDispatch).not.toBeCalled();
    expect(screen.queryByRole(`list`)).toBeInTheDocument();
    expect(fakeReviews.every((fakeReview) => {
      expect(screen.getByText(fakeReview.comment)).toBeInTheDocument();
      expect(screen.getByText(fakeReview.user.name)).toBeInTheDocument();
      expect(screen.getByText(fakeReview.rating)).toBeInTheDocument();
      expect(screen.getByText(humanizeDate(`MMMM DD, YYYY`, fakeReview.date))).toBeInTheDocument();
    }));
  });
});


describe(`FilmPageReviews for unauthorized user with no reviews`, () => {
  beforeAll(() => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {
        reviews: [],
        isLoadedIndicator: {
          areReviewsLoaded: true,
        },
      }
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
            <FilmPageReviews id={fakeFilm.id}/>
          </Router>
        </Provider>
    );
    expect(screen.getByText(`Sign in to add the first review`));
  });

  it(`should redirect to review form page when link clicked`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmPageReviews id={fakeFilm.id}/>
          </Router>
        </Provider>
    );
    fireEvent.click(screen.getByText(`Sign in to add the first review`));
    expect(history.location.pathname).toBe(AppRoute.LOGIN);
  });
});


describe(`FilmPageReviews for authorized user with no reviews`, () => {
  beforeAll(() => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {
        reviews: [],
        isLoadedIndicator: {
          areReviewsLoaded: true,
        },
      }
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
            <FilmPageReviews id={fakeFilm.id}/>
          </Router>
        </Provider>
    );
    expect(screen.getByText(`Add the first review`));
  });

  it(`should redirect to review form page when link clicked`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmPageReviews id={fakeFilm.id}/>
          </Router>
        </Provider>
    );
    fireEvent.click(screen.getByText(`Add the first review`));
    expect(history.location.pathname).toBe(`/${fakeFilm.id}/review`);
  });
});

import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import FilmPageNav from './film-page-nav';
import {history} from '../../utils-testing';

const FakeFilmPageTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};
const fakeTabNames = Object.values(FakeFilmPageTab);
const selectedTab = FakeFilmPageTab.DETAILS;

describe(`FilmPageOverview`, () => {
  it(`renders itself correctly`, () => {
    const activeTabClassName = `movie-nav__item--active`;
    render(
        <Router history={history}>
          <FilmPageNav selectedTab={selectedTab} handleTabSelect={jest.fn()} />
        </Router>
    );
    expect(fakeTabNames.every((item) => screen.getByText(item)));
    expect(screen.getByText(selectedTab).parentElement.classList.contains(activeTabClassName)).toBe(true);
  });

  it(`FilmPageOverview renders itself correctly`, () => {
    const tabSelectHandler = jest.fn();
    render(
        <Router history={history}>
          <FilmPageNav selectedTab={selectedTab} handleTabSelect={tabSelectHandler} />
        </Router>
    );
    expect(fakeTabNames.every((item) => {
      const tabElement = screen.getByText(item);
      fireEvent.click(tabElement);
      expect(tabSelectHandler).toBeCalledTimes(1);
    }));
  });
});



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

test(`FilmPageOverview render test`, () => {
  const tabSelectHandler = jest.fn();
  const selectedTab = FakeFilmPageTab.DETAILS;
  const activeTabClassName = `movie-nav__item--active`;
  render(
      <Router history={history}>
        <FilmPageNav selectedTab={selectedTab} handleTabSelect={tabSelectHandler} />
      </Router>
  );
  expect(fakeTabNames.every((item) => screen.getByText(item)));
  expect(screen.getByText(selectedTab).parentElement.classList.contains(activeTabClassName)).toBe(true);
  expect(fakeTabNames.every((item) => {
    const tabElement = screen.getByText(item);
    fireEvent.click(tabElement);
    expect(tabSelectHandler).toBeCalledTimes(1);
  }));
});

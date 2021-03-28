import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import LoadMoreButton from './load-more-button';
import {history} from '../../utils-testing';

describe(`LoadMoreButton test`, () => {
  const buttonClickHandler = jest.fn();

  it(`LoadMoreButton render test`, () => {
    render(
        <Router history={history}>
          <LoadMoreButton handleLoadMoreFilmsClick={buttonClickHandler} />
        </Router>
    );
    expect(screen.getByRole(`button`)).toBeInTheDocument();
    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });

  it(`LoadMoreButton user click test`, () => {
    render(
        <Router history={history} >
          <LoadMoreButton handleLoadMoreFilmsClick={buttonClickHandler}/>
        </Router>
    );

    fireEvent.click(screen.getByRole(`button`));
    expect(buttonClickHandler).toBeCalled();
  });
});


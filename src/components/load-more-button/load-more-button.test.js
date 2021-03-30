import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import LoadMoreButton from './load-more-button';
import {history} from '../../utils-testing';

describe(`LoadMoreButton`, () => {
  it(`renders itself correctly`, () => {
    render(
        <Router history={history}>
          <LoadMoreButton handleLoadMoreFilmsClick={jest.fn()} />
        </Router>
    );
    expect(screen.getByRole(`button`)).toBeInTheDocument();
    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });

  it(`calls handler after button click`, () => {
    const buttonClickHandler = jest.fn();
    render(
        <Router history={history} >
          <LoadMoreButton handleLoadMoreFilmsClick={buttonClickHandler}/>
        </Router>
    );

    fireEvent.click(screen.getByText(`Show more`));
    expect(buttonClickHandler).toBeCalled();
  });
});

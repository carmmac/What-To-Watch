import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import RatingInput from './rating-input';
import {history} from '../../utils-testing';

const fakeRatingScore = 5;
const fakeIsChecked = false;

describe(`RatingInput test`, () => {
  const ratingChangeHandler = jest.fn();

  it(`RatingInput render test`, () => {
    render(
        <Router history={history}>
          <RatingInput
            ratingScore={fakeRatingScore}
            handleUserRatingChange={ratingChangeHandler}
            isChecked={fakeIsChecked}
          />
        </Router>
    );
    expect(screen.getByLabelText(`Rating ${fakeRatingScore}`)).toBeInTheDocument();
  });

  it(`RatingInput user click test`, () => {
    render(
        <Router history={history}>
          <RatingInput
            ratingScore={fakeRatingScore}
            handleUserRatingChange={ratingChangeHandler}
            isChecked={fakeIsChecked}
          />
        </Router>
    );

    const radioInput = screen.getByLabelText(`Rating ${fakeRatingScore}`);

    fireEvent.change(radioInput, {target: {checked: true}});
    expect(radioInput.checked).toBe(true);
  });
});

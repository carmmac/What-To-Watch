import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import RatingInput from './rating-input';
import {history} from '../../utils-testing';

const fakeRatingScore = 5;
const fakeIsChecked = false;
const fakeIsDisabled = false;

describe(`RatingInput`, () => {
  const ratingChangeHandler = jest.fn();

  it(`renders itself correctly`, () => {
    render(
        <Router history={history}>
          <RatingInput
            ratingScore={fakeRatingScore}
            handleUserRatingChange={ratingChangeHandler}
            isChecked={fakeIsChecked}
            isDisabled={fakeIsDisabled}
          />
        </Router>
    );
    expect(screen.getByLabelText(`Rating ${fakeRatingScore}`)).toBeInTheDocument();
  });

  it(`toggles radio input`, () => {
    render(
        <Router history={history}>
          <RatingInput
            ratingScore={fakeRatingScore}
            handleUserRatingChange={ratingChangeHandler}
            isChecked={fakeIsChecked}
            isDisabled={fakeIsDisabled}
          />
        </Router>
    );

    const radioInput = screen.getByLabelText(`Rating ${fakeRatingScore}`);

    fireEvent.change(radioInput, {target: {checked: true}});
    expect(radioInput.checked).toBe(true);
  });
});

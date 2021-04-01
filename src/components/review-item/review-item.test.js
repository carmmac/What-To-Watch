import React from "react";
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import ReviewItem from './review-item';
import {humanizeDate} from "../../utils";
import {fakeReviews, history} from "../../utils-testing";

test(`ReviewItem renders itself correctly`, () => {
  const fakeReview = fakeReviews[0];
  render(
      <Router history={history}>
        <ReviewItem review={fakeReview} />
      </Router>
  );

  expect(screen.getByText(fakeReview.comment)).toBeInTheDocument();
  expect(screen.getByText(fakeReview.user.name)).toBeInTheDocument();
  expect(screen.getByText(fakeReview.rating)).toBeInTheDocument();
  expect(screen.getByText(humanizeDate(`MMMM DD, YYYY`, fakeReview.date))).toBeInTheDocument();
});

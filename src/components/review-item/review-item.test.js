import React from "react";
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import ReviewItem from './review-item';
import {humanizeDate} from "../../utils";
import {history} from "../../utils-testing";

const fakeReview = {
  "id": 1,
  "user": {
    "id": 13,
    "name": `Zak`
  },
  "rating": 1.4,
  "comment": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  "date": `2021-03-07T08:04:28.658Z`
};

test(`ReviewItem renders itself correctly`, () => {
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

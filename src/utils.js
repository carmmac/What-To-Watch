import React from 'react';
import dayjs from 'dayjs';

const getRandomNum = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

const humanizeDate = (format, date) => {
  return dayjs(date).format(format);
};

const renderReviews = (reviews, ContainerComponent, ItemComponent) => {
  if (reviews.length > 1) {
    return <>
      <ContainerComponent render={() => reviews.slice(0, (reviews.length + 1) / 2).map((review, i) => <ItemComponent key={`review-${i}`} review={review}/>)} />
      <ContainerComponent render={() => reviews.slice((reviews.length + 1) / 2, reviews.length).map((review, i) => <ItemComponent key={`review-${i}`} review={review}/>)} />
    </>;
  }
  return (
    <ContainerComponent render={() => <ItemComponent review={reviews[0]}/>} />
  );
};

export {
  getRandomNum,
  humanizeDate,
  renderReviews,
};

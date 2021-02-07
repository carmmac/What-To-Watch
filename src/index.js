import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoFilm = {
  title: `Macbeth`,
  genre: `drama`,
  year: 2015,
};

const Setting = {
  CARDS_VISIBLE: 20,
  PROMO: promoFilm,
};

ReactDOM.render(
    <App props={Setting}/>,
    document.querySelector(`#root`)
);

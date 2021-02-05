import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS_VISIBLE: 20,
};

ReactDOM.render(
    <App cardsNum={Setting.CARDS_VISIBLE}/>,
    document.querySelector(`#root`)
);

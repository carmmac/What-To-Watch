import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mock/films-mock.js';
import reviews from './mock/reviews-mock.js';
import {getRandomNum} from './utils';
import {FilmPageTab} from './const.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

const promoFilm = films[Math.floor(getRandomNum(0, films.length - 1))];

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilm={promoFilm}
        films={films}
        reviews={reviews}
        filmPageTab={FilmPageTab}
      />
    </Provider>,
    document.querySelector(`#root`)
);

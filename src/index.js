import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {createApi} from './services/api';
import thunk from "redux-thunk";
import {chechAuth} from './store/api-actions';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';

const api = createApi(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(chechAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
      />
    </Provider>,
    document.querySelector(`#root`)
);

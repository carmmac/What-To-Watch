import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {createApi} from './services/api';
import {chechAuth} from './store/api-actions';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import {configureStore} from '@reduxjs/toolkit';

const api = createApi(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    })
});

store.dispatch(chechAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

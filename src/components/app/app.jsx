import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {appPropTypes} from '../../prop-types.js';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import Player from '../player/player.jsx';
import LoginPage from '../login/login-page.jsx';
import UserListPage from '../user-list/user-list-page.jsx';
import ReviewAddPage from '../review-add/review-add-page.jsx';
import NotFoundScreen from '../not-found/not-found-screen.jsx';

const App = (props) => {
  const mockData = {
    films: [...props.films],
    reviews: [...props.reviews],
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main {...props} />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/mylist">
          <UserListPage {...mockData} />
        </Route>
        <Route exact path="/films/:id" render={(renderProps) => <FilmPage {...mockData} {...renderProps} />} />
        <Route exact path="/films/:id/review" render={(renderProps) => <ReviewAddPage {...mockData} {...renderProps} />} />
        <Route exact path="/player/:id" render={(renderProps) => <Player {...mockData} {...renderProps} />} />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appPropTypes;

export default App;

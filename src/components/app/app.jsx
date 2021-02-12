import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {appPropTypes} from '../../prop-types.js';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import Player from '../player/player.jsx';
import LoginPage from '../login/login-page.jsx';
import UserListPage from '../user-list/user-list-page.jsx';
import ReviewPage from '../review/review-page.jsx';
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
        <Route exact path="/films/:id" render={(props) => <FilmPage {...mockData} {...props} />} />
        <Route exact path="/films/:id/review" render={(props) => <ReviewPage {...mockData} {...props} />} />
        <Route exact path="/player/:id" render={(props) => <Player {...mockData} {...props} />} />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appPropTypes;

export default App;

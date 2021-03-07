import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {appPropTypes} from '../../prop-types.js';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import Player from '../player/player.jsx';
import LoginPage from '../login/login-page.jsx';
import UserListPage from '../user-list/user-list-page.jsx';
import AddReviewPage from '../add-review/add-review-page.jsx';
import NotFoundScreen from '../not-found/not-found-screen.jsx';
import {PrivateRoute} from '../private-route/private-route.jsx';
import {AppRoute} from '../../const.js';

const App = ({films, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <UserListPage
            films={films}
            reviews={reviews}
          />
        </Route>
        <Route exact path={AppRoute.FILM} render={(routerProps) =>
          <FilmPage
            films={films}
            reviews={reviews}
            {...routerProps}
          />}
        />
        <PrivateRoute exact path={AppRoute.REVIEW} render={(routerProps) =>
          <AddReviewPage
            films={films}
            reviews={reviews}
            {...routerProps}
            onPost={()=>{}}
          />}
        />
        <Route exact path={AppRoute.PLAYER} render={(routerProps) =>
          <Player
            films={films}
            reviews={reviews}
            {...routerProps}
          />}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appPropTypes;

export default App;

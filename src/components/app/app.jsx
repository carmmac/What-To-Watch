import React, {useEffect, useMemo} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import Player from '../player/player.jsx';
import LoginPage from '../login/login-page.jsx';
import UserListPage from '../user-list/user-list-page.jsx';
import AddReviewPage from '../add-review/add-review-page.jsx';
import NotFoundScreen from '../not-found/not-found-screen.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import {AppRoute, FilmsListLocation} from '../../const.js';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilmsList} from '../../store/api-actions.js';
import {makeGetAreFilmsLoadedIndicator, makeGetFilms} from '../../store/data-reducer/selectors.js';

const App = () => {
  const getAreFilmsLoadedIndicator = useMemo(makeGetAreFilmsLoadedIndicator, []);
  const areFilmsLoaded = useSelector((state) => getAreFilmsLoadedIndicator(state));

  const getFilms = useMemo(makeGetFilms, []);
  const films = useSelector((state) => getFilms(state));

  const dispatch = useDispatch();

  const onLoadFilms = () => {
    if (!areFilmsLoaded) {
      dispatch(fetchFilmsList());
    }
  };

  useEffect(() => onLoadFilms(), [areFilmsLoaded]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            currentLocation={FilmsListLocation.MAIN}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <PrivateRoute exact path={AppRoute.MY_LIST} render={(routerProps) =>
          <UserListPage
            currentLocation={FilmsListLocation.USER_LIST}
            {...routerProps}
          />}
        />
        <Route exact path={AppRoute.FILM} render={(routerProps) =>
          <FilmPage
            currentLocation={FilmsListLocation.FILM_PAGE}
            {...routerProps}
          />}
        />
        <PrivateRoute exact path={AppRoute.REVIEW} render={(routerProps) =>
          <AddReviewPage
            {...routerProps}
          />}
        />
        <Route exact path={AppRoute.PLAYER} render={(routerProps) =>
          <Player
            films={films}
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

export default App;

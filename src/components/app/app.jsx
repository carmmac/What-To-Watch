import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {filmsPropTypes} from '../../prop-types.js';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import Player from '../player/player.jsx';
import LoginPage from '../login/login-page.jsx';
import UserListPage from '../user-list/user-list-page.jsx';
import AddReviewPage from '../add-review/add-review-page.jsx';
import NotFoundScreen from '../not-found/not-found-screen.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import {AppRoute} from '../../const.js';
import {connect} from 'react-redux';
import {fetchFilmsList} from '../../store/api-actions.js';

const App = ({films, isLoadedIndicator, onLoadFilms}) => {
  useEffect(() => onLoadFilms(), [isLoadedIndicator.areFilmsLoaded]);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <PrivateRoute exact path={AppRoute.MY_LIST} render={(routerProps) =>
          <UserListPage
            films={films}
            {...routerProps}
          />}
        />
        <Route exact path={AppRoute.FILM} render={(routerProps) =>
          <FilmPage
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

const mapStateToProps = (state) => ({
  films: state.films,
  isLoadedIndicator: state.isLoadedIndicator,
});

const mergeProps = (stateProps, dispatchProps) => {
  const {areFilmsLoaded} = stateProps.isLoadedIndicator;
  const {dispatch} = dispatchProps;
  return {
    ...stateProps,
    areFilmsLoaded,
    onLoadFilms() {
      if (!areFilmsLoaded) {
        dispatch(fetchFilmsList());
      }
    },
  };
};

App.propTypes = {
  films: filmsPropTypes,
  isLoadedIndicator: PropTypes.object.isRequired,
  onLoadFilms: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, null, mergeProps)(App);

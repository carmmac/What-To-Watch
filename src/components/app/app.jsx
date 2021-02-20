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

const App = ({promoFilm, films, reviews, filmPageTab}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            promoFilm={promoFilm}
            films={films}
            reviews={reviews} />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/mylist">
          <UserListPage
            films={films}
            reviews={reviews}
          />
        </Route>
        <Route exact path="/films/:id" render={(routerProps) =>
          <FilmPage
            films={films}
            reviews={reviews}
            filmPageTab={filmPageTab}
            {...routerProps}
          />}
        />
        <Route exact path="/films/:id/review" render={(routerProps) =>
          <AddReviewPage
            films={films}
            reviews={reviews}
            {...routerProps}
            onPost={()=>{}}
          />}
        />
        <Route exact path="/player/:id" render={(routerProps) =>
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

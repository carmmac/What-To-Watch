import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import Film from '../film-card/film-card.jsx';
import Player from '../player/player.jsx';
import LoginPage from '../login/login.jsx';
import UserListPage from '../user-list/user-list.jsx';
import ReviewPage from '../review/review.jsx';
import NotFoundScreen from '../not-found/not-found.jsx';

const App = ({props}) => {
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
          <UserListPage />
        </Route>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route exact path="/films/:id/review">
          <ReviewPage />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  props: PropTypes.shape({
    CARDS_VISIBLE: PropTypes.number.isRequired,
    PROMO: PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  })
};

export default App;

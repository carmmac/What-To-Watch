import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

const NotFoundScreen = () => {
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo/>

        <UserBlock/>
      </header>

      <div className="movie-card__wrap" style={{height: `100vh`}}>
        <h1>404 Not Found</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </section>
  );
};

export default NotFoundScreen;

import React from 'react';
import {FilmPageTab} from '../../const.js';

const FilmPageNav = ({selectedTab, handleTabSelect}) => {
  const tabNames = Object.keys(FilmPageTab);

  return (
    <ul className="movie-nav__list">
      {tabNames.map((name, i) => {
        return (
          <li className="movie-nav__item" key={i}>
            <span
              className="movie-nav__link"
              onClick={({target}) => {
                console.log(target.textContent);
                handleTabSelect(target.textContent);
              }}
            >
              {FilmPageTab[name]}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default FilmPageNav;

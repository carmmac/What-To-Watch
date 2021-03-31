import React from 'react';
import PropTypes from 'prop-types';
import {FilmPageTab} from '../../const.js';

const FilmPageNav = ({selectedTab, handleTabSelect}) => {
  const tabNames = Object.values(FilmPageTab);

  return (
    <ul className="movie-nav__list">
      {tabNames.map((name, i) => {
        return (
          <li
            className={`movie-nav__item ${selectedTab === name ? `movie-nav__item--active` : ``}`}
            key={`tabname_${name}${i}`}>
            <span
              className="movie-nav__link"
              style={{cursor: `pointer`}}
              onClick={({target}) => {
                handleTabSelect(target.textContent);
              }}>
              {name}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

FilmPageNav.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
};

export default FilmPageNav;

import React from 'react';
import PropTypes from 'prop-types';
import {FilmPageTab} from '../../const.js';
import classNames from 'classnames';
import {FilmPageNavStyle} from './film-page-nav-style.js';

const FilmPageNav = ({selectedTab, handleTabSelect}) => {
  const tabNames = Object.values(FilmPageTab);
  const cn = classNames;

  return (
    <ul className="movie-nav__list">
      {tabNames.map((name) => {
        return (
          <li
            className={
              cn(
                  {"movie-nav__item--active": selectedTab === name},
                  `movie-nav__item`
              )
            }
            key={`tabname_${name}`}>
            <span
              className="movie-nav__link"
              style={FilmPageNavStyle.LINK}
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

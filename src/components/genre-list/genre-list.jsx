import React from 'react';
import PropTypes from 'prop-types';

const GenreList = ({genres, selectedGenreTab, handleGenreSelect, films}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genreItem, i) =>
        <li
          className={`catalog__genres-item ${selectedGenreTab === genreItem ? `catalog__genres-item--active` : ``}`}
          key={genreItem + i}>
          <span
            className="catalog__genres-link"
            style={{cursor: `pointer`}}
            onClick={({target}) => handleGenreSelect(films, target.textContent)}
          >{genreItem}
          </span>
        </li>)}
    </ul>
  );
};

GenreList.propTypes = PropTypes.string.isRequired;

export default GenreList;

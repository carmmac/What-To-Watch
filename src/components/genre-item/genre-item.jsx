import React from 'react';
import PropTypes from 'prop-types';

const GenreItem = ({genre, selectedGenreTab, handleGenreSelect}) => {
  return (
    <li className={`catalog__genres-item ${selectedGenreTab === genre ? `catalog__genres-item--active` : ``}`}>
      <span
        href="#"
        className="catalog__genres-link"
        style={{cursor: `pointer`}}
        onClick={({target}) => handleGenreSelect(target.textContent)}
      >{genre}
      </span>
    </li>
  );
};

GenreItem.propTypes = PropTypes.string.isRequired;

export default GenreItem;

import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const GenreList = ({handleGenreSelect}) => {
  const {genres} = useSelector((state) => state.DATA);
  const {currentGenre} = useSelector((state) => state.UTILITY);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genreItem, i) =>
        <li
          className={`catalog__genres-item ${currentGenre === genreItem ? `catalog__genres-item--active` : ``}`}
          key={genreItem + i}>
          <span
            className="catalog__genres-link"
            style={{cursor: `pointer`}}
            onClick={({target}) => {
              handleGenreSelect(target.textContent);
            }}
          >{genreItem}
          </span>
        </li>)}
    </ul>
  );
};

GenreList.propTypes = {
  handleGenreSelect: PropTypes.func.isRequired,
};

export default memo(GenreList);

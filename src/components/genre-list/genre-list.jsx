import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getGenres} from '../../store/utility-reducer/selectors';

const GenreList = ({currentGenre, handleGenreSelect}) => {
  const genres = useSelector((state) => getGenres(state));

  return (
    <ul className="catalog__genres-list">
      {genres.map((genreItem, i) =>
        <li
          className={`catalog__genres-item ${currentGenre === genreItem ? `catalog__genres-item--active` : ``}`}
          key={`genreItem_${i}`}>
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
  currentGenre: PropTypes.string.isRequired,
  handleGenreSelect: PropTypes.func.isRequired,
};

export default memo(GenreList);

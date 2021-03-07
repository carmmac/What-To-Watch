import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const GenreList = ({genres, currentGenre, handleGenreSelect}) => {
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

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  genres: state.genres,
});

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
  handleGenreSelect: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(GenreList);

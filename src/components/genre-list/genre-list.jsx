import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const GenreList = ({genres, currentGenre, onGenreSelect}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genreItem, i) =>
        <li
          className={`catalog__genres-item ${currentGenre === genreItem ? `catalog__genres-item--active` : ``}`}
          key={genreItem + i}>
          <span
            className="catalog__genres-link"
            style={{cursor: `pointer`}}
            onClick={({target}) => onGenreSelect(target.textContent)}
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

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(ActionCreator.genreSelect(genre));
    dispatch(ActionCreator.filterFilmsByGenre(genre));
  },
});

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
  onGenreSelect: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);

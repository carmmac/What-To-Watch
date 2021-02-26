import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const GenreList = ({genres, selectedGenreTab, onGenreSelect, films}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genreItem, i) =>
        <li
          className={`catalog__genres-item ${selectedGenreTab === genreItem ? `catalog__genres-item--active` : ``}`}
          key={genreItem + i}>
          <span
            className="catalog__genres-link"
            style={{cursor: `pointer`}}
            onClick={({target}) => onGenreSelect(films, target.textContent)}
          >{genreItem}
          </span>
        </li>)}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  selectedGenreTab: state.selectedGenreTab,
  films: state.films,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(films, genre) {
    dispatch(ActionCreator.genreSelect(genre));
    dispatch(ActionCreator.filterFilmsByGenre(films, genre));
  },
});

GenreList.propTypes = PropTypes.string.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);

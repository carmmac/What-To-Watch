import React from 'react';
import {connect} from 'react-redux';
import {filmsPropTypes} from '../../prop-types';
import FilmCard from '../film-card/film-card';
import Loading from '../loading/loading';

const FilmsList = ({films, filmsVisibleNum, loadIndicator}) => {
  return (
    !loadIndicator.films
      ? <Loading />
      :
      <div className="catalog__movies-list">
        {
          films.slice(0, filmsVisibleNum).map((film) => <FilmCard key={film.id} {...film} />)
        }
      </div>
  );
};

const mapStateToProps = (state) => ({
  loadIndicator: state.loadIndicator,
});

FilmsList.propTypes = filmsPropTypes;

export {FilmsList};
export default connect(mapStateToProps, null)(FilmsList);

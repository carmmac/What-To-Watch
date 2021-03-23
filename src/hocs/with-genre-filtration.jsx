import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {ALL_GENRES} from '../const';
import {makeGetAreFilmsLoadedIndicator, makeGetFilms, makeGetFilmsFilteredByGenre} from '../store/data-reducer/selectors';
import Loading from '../components/loading/loading';

const WithGenreFiltration = ({component: Component, genre, filmsVisibleNum}) => {
  const getAreFilmsLoadedIndicator = useMemo(makeGetAreFilmsLoadedIndicator, []);
  const areFilmsLoaded = useSelector((state) => getAreFilmsLoadedIndicator(state));

  const getFilms = useMemo(makeGetFilms, []);
  const getFilmsFilteredByGenre = useMemo(makeGetFilmsFilteredByGenre, []);

  const films = useSelector((state) => getFilms(state));
  const filmsFiltered = useSelector((state) => getFilmsFilteredByGenre(state, genre));

  const getFilmsByGenre = () => {
    return genre === ALL_GENRES
      ? films.slice(0, filmsVisibleNum)
      : filmsFiltered.slice(0, filmsVisibleNum);
  };

  const filmsToShow = getFilmsByGenre();

  if (!areFilmsLoaded) {
    return <Loading />;
  }

  return <Component films={filmsToShow} />;
};

WithGenreFiltration.propTypes = {
  component: PropTypes.func.isRequired,
  filmsVisibleNum: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default WithGenreFiltration;

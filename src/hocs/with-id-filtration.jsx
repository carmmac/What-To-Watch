import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {makeGetAreFilmsLoadedIndicator, makeGetFilmsSimilar} from '../store/data-reducer/selectors';
import Loading from '../components/loading/loading';

const WithIdFiltration = ({component: Component, genre, id, handleFilmCardClick}) => {

  const getAreFilmsLoadedIndicator = useMemo(makeGetAreFilmsLoadedIndicator, []);
  const areFilmsLoaded = useSelector((state) => getAreFilmsLoadedIndicator(state));

  const getFilmsSimilar = useMemo(makeGetFilmsSimilar, []);

  const filmsSimilar = useSelector((state) => getFilmsSimilar(state, genre, id));

  if (!areFilmsLoaded) {
    return <Loading />;
  }

  return <Component films={filmsSimilar} handleFilmCardClick={handleFilmCardClick} />;
};

WithIdFiltration.propTypes = {
  component: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  handleFilmCardClick: PropTypes.func.isRequired,
};

export default WithIdFiltration;

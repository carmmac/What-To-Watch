import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmPageNav from '../film-page-nav/film-page-nav.jsx';
import FilmPageOverview from '../film-page-overview/film-page-overview.jsx';
import FilmPageDetails from '../film-page-details/film-page-details.jsx';
import FilmPageReviews from '../film-page-reviews/film-page-reviews.jsx';
import {filmPropTypes} from '../../prop-types.js';
import {FilmPageTab} from '../../const.js';

const FilmPageTabs = ({film, filmId}) => {
  const [selectedTab, setSelectedTab] = useState(FilmPageTab.OVERVIEW);

  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <FilmPageNav
          selectedTab={selectedTab}
          handleTabSelect={handleTabSelect}
        />
      </nav>

      {
        (selectedTab === FilmPageTab.OVERVIEW && <FilmPageOverview film={film} />) ||
        (selectedTab === FilmPageTab.DETAILS && <FilmPageDetails film={film} />) ||
        (selectedTab === FilmPageTab.REVIEWS && <FilmPageReviews id={filmId}/>)
      }
    </div>
  );
};

FilmPageTabs.propTypes = {
  film: PropTypes.shape(filmPropTypes),
  filmId: PropTypes.number.isRequired,
};

export default FilmPageTabs;

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmPageNav from '../film-page-nav/film-page-nav.jsx';
import FilmPageOverview from '../film-page-overview/film-page-overview.jsx';
import FilmPageDetails from '../film-page-details/film-page-details.jsx';
import FilmPageReviews from '../film-page-reviews/film-page-reviews.jsx';
import {filmMockPropTypes, reviewsMockPropTypes} from '../../prop-types.js';

const FilmPageTabs = ({film, filmPageTab}) => {
  const [selectedTab, setSelectedTab] = useState(filmPageTab.OVERVIEW);

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
        (selectedTab === filmPageTab.OVERVIEW && <FilmPageOverview film={film} />) ||
        (selectedTab === filmPageTab.DETAILS && <FilmPageDetails film={film} />) ||
        (selectedTab === filmPageTab.REVIEWS && <FilmPageReviews reviews={reviews}/>)
      }
    </div>
  );
};

FilmPageTabs.propTypes = {
  film: PropTypes.shape(filmMockPropTypes),
  reviews: reviewsMockPropTypes,
  filmPageTab: PropTypes.object.isRequired,
  defaultTab: PropTypes.string.isRequired,
};

export default FilmPageTabs;

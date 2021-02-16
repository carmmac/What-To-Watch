import PropTypes from 'prop-types';

const appPropTypes = {
  promoFilm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }),
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

const mockPropTypes = PropTypes.arrayOf(PropTypes.object).isRequired;

const filmMockPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.array,
  runTime: PropTypes.number,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number,
  isFavorite: PropTypes.bool
};

const reviewMockPropTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export {
  appPropTypes,
  mockPropTypes,
  filmMockPropTypes,
  reviewMockPropTypes,
};

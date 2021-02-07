import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = ({props}) => {
  return (<Main {...props}/>);
};

App.propTypes = {
  props: PropTypes.shape({
    CARDS_VISIBLE: PropTypes.number.isRequired,
    PROMO: PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  })
};

export default App;

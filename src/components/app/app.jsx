import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  const {cardsNum} = props;

  return <>
    <Main cardsNum={cardsNum}/>
  </>;
};

export default App;

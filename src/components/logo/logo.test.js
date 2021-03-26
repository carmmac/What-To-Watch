import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import Logo from './logo';
import {createMemoryHistory} from 'history';

test(`Logo component render test by snapshot`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <Logo />
      </Router>
  );
  expect(container).toMatchSnapshot();
});

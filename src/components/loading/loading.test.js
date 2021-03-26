import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import Loading from './loading';
import {createMemoryHistory} from 'history';

test(`Loading component render test by snapshot`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <Loading />
      </Router>
  );
  expect(container).toMatchSnapshot();
});

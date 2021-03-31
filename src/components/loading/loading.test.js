import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import Loading from './loading';
import {history} from '../../utils-testing';

test(`Loading component renders itself correctly by snapshot`, () => {
  const {container} = render(
      <Router history={history}>
        <Loading />
      </Router>
  );
  expect(container).toMatchSnapshot();
});

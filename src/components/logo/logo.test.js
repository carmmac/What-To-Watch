import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import Logo from './logo';
import {history} from '../../utils-testing';

test(`Logo component renders itself correctly by snapshot`, () => {
  const {container} = render(
      <Router history={history}>
        <Logo />
      </Router>
  );
  expect(container).toMatchSnapshot();
});

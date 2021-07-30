import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MockData from '../../../tools/MockData';
import Display from '../Display';

test('Content from Display component matches snapshot', () => {
  const content = render(
    <Display users={MockData} />,
  );
  expect(content.container).toMatchSnapshot();
});
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchUser from '../SearchUser';

test('Content from SearchUser component matches snapshot', () => {
  const content = render(
    <SearchUser handleSearch={jest.fn()} term={`david`} />
  );
  expect(content.container).toMatchSnapshot();
  expect(screen.getByDisplayValue('david')).toBeInTheDocument();
})
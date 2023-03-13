import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the App title.', () => {
  render(<App />);
  const appTitle = screen.getByText("Squirrel Saver");
  expect(appTitle).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('Renders title', () => {
    render(<LoginPage />);
    const linkElement = screen.getByText("LoginPage");
    expect(linkElement).toBeInTheDocument();
  });
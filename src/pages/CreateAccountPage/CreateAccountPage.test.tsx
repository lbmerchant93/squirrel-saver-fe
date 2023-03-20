import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateAccountPage from './CreateAccountPage';

it('Renders title', () => {
    render(<CreateAccountPage />);
    const linkElement = screen.getByText("CreateAccountPage");
    expect(linkElement).toBeInTheDocument();
});
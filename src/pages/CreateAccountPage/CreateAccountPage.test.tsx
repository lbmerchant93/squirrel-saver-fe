import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateAccountPage from './CreateAccountPage';

it('Renders welcome message to user and describes what the user should do to create an account.', () => {
    render(<CreateAccountPage />);
    const linkElement = screen.getByText("CreateAccountPage");
    expect(linkElement).toBeInTheDocument();
});

it.skip('Renders a form to create an account with an email and password, their preferred name, and button to submit the form.', () => {
    render(<CreateAccountPage />);
});

it.skip('Renders a button to create an account using a Google account..', () => {
    render(<CreateAccountPage />);
});

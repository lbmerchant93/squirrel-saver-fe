import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateAccountPage from './CreateAccountPage';

it('Renders welcome message to user and describes what the user should do to create an account.', () => {
    render(<CreateAccountPage />);
    const welcomeMessage = screen.getByText("Welcome!");
    expect(welcomeMessage).toBeInTheDocument();
    const createAccountDirections = screen.getByText("Please fill out the form below to create your account, or use your Google account to create it.");
    expect(createAccountDirections).toBeInTheDocument();
});

it.skip('Renders a form to create an account with an email and password, their preferred name, and button to submit the form.', () => {
    render(<CreateAccountPage />);
});

it.skip('Renders a button to create an account using a Google account..', () => {
    render(<CreateAccountPage />);
});

it.skip('Renders a message with link to navigate the user to the LoginPage if they need.', () => {
    render(<CreateAccountPage />);
})

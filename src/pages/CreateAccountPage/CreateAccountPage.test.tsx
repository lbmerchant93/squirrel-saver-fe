import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreateAccountPage from './CreateAccountPage';

it('Renders welcome message to user and describes what the user should do to create an account.', () => {
    render(<BrowserRouter><CreateAccountPage /></BrowserRouter>);
    const welcomeMessage = screen.getByText("Welcome!");
    expect(welcomeMessage).toBeInTheDocument();
    const createAccountDirections = screen.getByText("Please fill out the form below to create your account, or use your Google account to create it.");
    expect(createAccountDirections).toBeInTheDocument();
});

it('Renders a form to create an account with an email and password, their preferred name, and button to submit the form.', () => {
    render(<BrowserRouter><CreateAccountPage /></BrowserRouter>);
    const preferredNameInput = screen.getByTestId('preferred-name');
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const createAccountButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.change(preferredNameInput, {
        target: { value: "Test User" },
    });
    fireEvent.change(emailInput, {
        target: { value: "test@test.com" },
    });
    fireEvent.change(passwordInput, {
        target: { value: "testing" },
    });
    expect(preferredNameInput).toHaveValue("Test User");
    expect(emailInput).toHaveValue("test@test.com");
    expect(passwordInput).toHaveValue("testing");
    expect(createAccountButton).toBeInTheDocument();
});

it('Renders a button to create an account using a Google account..', () => {
    render(<BrowserRouter><CreateAccountPage /></BrowserRouter>);
    const createAccountWithGoogleButton = screen.getByRole('button', { name: 'Sign in with Google' });
    expect(createAccountWithGoogleButton).toBeInTheDocument()
});

it('Renders a button to login as a guest user.', () => {
    render(<BrowserRouter><CreateAccountPage /></BrowserRouter>)
    const loginAsGuestButton = screen.getByRole('button', { name: 'Sign in as Guest' });
    expect(loginAsGuestButton).toBeInTheDocument();
});

it('Renders a message with link to navigate the user to the LoginPage if they need.', () => {
    render(<BrowserRouter><CreateAccountPage /></BrowserRouter>);
    const loginMessage = screen.getByText("Already have an account?")
    expect(loginMessage).toBeInTheDocument();
    const loginLink = screen.getByRole('link', { name: 'Login' });
    expect(loginLink).toBeInTheDocument();
})

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import LandingPage from './LandingPage';
import userEvent from '@testing-library/user-event';

describe('Landing Page', () => {
    test('Renders welcome message.', () => {
        render(<LandingPage />);
        const welcomeMessage = screen.getByText("Welcome to Squirrel Saver!");
        expect(welcomeMessage).toBeInTheDocument();
    });

    test('Renders Squirrel Saver description.', () => {
        render(<LandingPage />);
        const description = screen.getByText("This app is designed to help you squirrel away money from each shift you work in order to help build your savings.");
        expect(description).toBeInTheDocument();
    });

    test('Renders log in directions and link to LoginPage.', async () => {
        render(<LandingPage />);
        const loginDirections = screen.getByText("Already have an account? Great! Welcome back! Click here to login.");
        expect(loginDirections).toBeInTheDocument();

        const loginLink = screen.getByRole('link', { name: 'login'})
        expect(loginLink).toBeInTheDocument();
        userEvent.click(loginLink);
        await waitFor(() => {
            expect(screen.getByText("Login")).toBeInTheDocument();
        });
    });

    test('Renders create account directions and link to CreateAccountPage.', async () => {
        render(<LandingPage />);
        const createAccountDirections = screen.getByText("Is this your first time here? Awesome, welcome to Squirrel Saver! Click here to create an account and get started squirreling your way to a better savings.");
        expect(createAccountDirections).toBeInTheDocument();

        const createAccountLink = screen.getByRole('link', { name: 'create an account'})
        expect(createAccountLink).toBeInTheDocument();
        userEvent.click(createAccountLink);
        await waitFor(() => {
            expect(screen.getByText("Create Account")).toBeInTheDocument();
        });
    });
})

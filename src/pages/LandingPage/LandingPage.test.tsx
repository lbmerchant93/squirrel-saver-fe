import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import LandingPage from './LandingPage';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Landing Page', () => {
    it('Renders welcome message.', () => {
        render(<Router><LandingPage /></Router>);
        const welcomeMessage = screen.getByText("Welcome to Squirrel Saver!");
        expect(welcomeMessage).toBeInTheDocument();
    });

    it('Renders Squirrel Saver description.', () => {
        render(<Router><LandingPage /></Router>);
        const description = screen.getByText("*The app designed to help squirrel away money in order to help build your savings.*");
        expect(description).toBeInTheDocument();
    });

    it('Renders log in directions and link to LoginPage.', async () => {
        render(<Router><LandingPage /></Router>);
        const loginDirections = screen.getByText("Already have an account? Great! Welcome back!");
        expect(loginDirections).toBeInTheDocument();

        const loginLink = screen.getByRole('link', { name: 'Click here to login.' })
        expect(loginLink).toBeInTheDocument();
        // userEvent.click(loginLink);
        // await waitFor(() => {
        //     expect(screen.getByText("LoginPage")).toBeInTheDocument();
        // });
    });

    it.skip('Directs user to the LoginPage on login link click.', async () => {
        render(<Router><LandingPage /></Router>);

        const loginLink = screen.getByRole('link', { name: 'Click here to login.' })
        // userEvent.click(loginLink);
        // await waitFor(() => {
        //     expect(screen.getByText("LoginPage")).toBeInTheDocument();
        // });
    });

    it.skip('Renders create account directions and link to CreateAccountPage.', async () => {
        render(<LandingPage />);
        const createAccountDirections = screen.getByText("Is this your first time here? Awesome, welcome to Squirrel Saver!");
        expect(createAccountDirections).toBeInTheDocument();

        const createAccountLink = screen.getByRole('link', { name: 'Click here to create an account.'})
        expect(createAccountLink).toBeInTheDocument();
        userEvent.click(createAccountLink);
        await waitFor(() => {
            expect(screen.getByText("Create Account")).toBeInTheDocument();
        });
    });

    it.skip('Directs user to the CreateAccountPage on create account link click.', async () => {
        render(<Router><LandingPage /></Router>);

        const createAccountLink = screen.getByRole('link', { name: 'Click here to create an account.' })
        // userEvent.click(createAccountLink);
        // await waitFor(() => {
        //     expect(screen.getByText("CreateAccountPage")).toBeInTheDocument();
        // });
    });
});
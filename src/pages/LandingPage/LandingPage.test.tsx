import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

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

    test('Renders log in directions and link to LoginPage.', () => {
        render(<LandingPage />);
        const loginDirections = screen.getByText("Already have an account? Great! Welcome back! Click here to login.");
        expect(loginDirections).toBeInTheDocument();

        const loginLink = screen.getAllByRole('link', { name: 'login'})
        expect(loginLink).toBeInTheDocument();
    });

    test('Renders create account directions and link to CreateAccountPage.', () => {
        render(<LandingPage />);
        const createAccountDirections = screen.getByText("Is this your first time here? Awesome, welcome to Squirrel Saver! Click here to create an account and get started squirreling your way to a better savings.");
        expect(createAccountDirections).toBeInTheDocument();

        const createAccountLink = screen.getAllByRole('link', { name: 'create an account'})
        expect(createAccountLink).toBeInTheDocument();
    });
})

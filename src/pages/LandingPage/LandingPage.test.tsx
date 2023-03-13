import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('Landing Page', () => {
    test('Renders welcome message.', () => {
        render(<LandingPage />);
        const pageTitle = screen.getByText("Welcome to Squirrel Saver!");
        expect(pageTitle).toBeInTheDocument();
    });

    test('Renders Squirrel Saver description.', () => {
        render(<LandingPage />);
        const pageTitle = screen.getByText("This app is designed to help you squirrel away money from each shift you work in order to help build your savings.");
        expect(pageTitle).toBeInTheDocument();
    });

    test('Renders log in directions.', () => {
        render(<LandingPage />);
        const pageTitle = screen.getByText("Already have an account? Great! Welcome back! Click here to log in.");
        expect(pageTitle).toBeInTheDocument();
    });

    test('Renders create account directions.', () => {
        render(<LandingPage />);
        const pageTitle = screen.getByText("Is this your first time here? Awesome, welcome to Squirrel Saver! Click here to create an account and get started squirreling your way to a better savings.");
        expect(pageTitle).toBeInTheDocument();
    });
})

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
        const pageTitle = screen.getByText("This app is designed to help you squirrel away money from each shift you work in order to help build your savings. ");
        expect(pageTitle).toBeInTheDocument();
    });


})

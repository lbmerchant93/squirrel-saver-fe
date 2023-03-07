import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('Landing Page', () => {
    test('Renders Landing Page text', () => {
        render(<LandingPage />);
        const pageTitle = screen.getByText("Landing Page");
        expect(pageTitle).toBeInTheDocument();
    });
})

import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBar from './AppBar';

describe('Landing Page', () => {
    test('Renders Landing Page text', () => {
        render(<AppBar />);
        const pageTitle = screen.getByText("Squirrel Saver");
        expect(pageTitle).toBeInTheDocument();
    });
})

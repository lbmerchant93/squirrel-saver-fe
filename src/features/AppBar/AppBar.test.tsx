import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBar from './AppBar';

describe('AppBar', () => {
    test('Renders the App title and doesn\'t render the logout button if the user is not logged in.', () => {
        render(<AppBar />);
        // Check Title is present on the screen
        const pageTitle = screen.getByText(/Squirrel Saver/i);
        expect(pageTitle).toBeInTheDocument();
        // Check that "Logout" is not on the screen, use queryBy* for checking existence
        expect(screen.queryByText(/Logout/i)).toBe(null);
    });

    test('Renders a logout button when a user is logged in.', () => {
        render(<AppBar />);
        // Action to assign user as logged in, working here to get test to pass

        // Check that a button with text logout is on the screen
        const logoutButton = screen.getByRole("button", {name: /Logout/i});
        expect(logoutButton).toBeInTheDocument();
    });
})

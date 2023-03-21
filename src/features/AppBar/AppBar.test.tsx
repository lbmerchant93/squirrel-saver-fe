import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppBar from './AppBar';
import App from '../../App';

describe('AppBar', () => {
    it('Renders the App title and doesn\'t render the logout button if the user is not logged in.', () => {
        render(<BrowserRouter><AppBar /></BrowserRouter>);
        // Check Title is present on the screen
        const pageTitle = screen.getByText(/Squirrel Saver/i);
        expect(pageTitle).toBeInTheDocument();
        // Check that "Logout" is not on the screen, use queryBy* for checking existence
        expect(screen.queryByText(/Logout/i)).toBe(null);
    });

    it('Directs user to the LandingPage when clicking on app title', async () => {
        render(<App />);
        const appTitle = screen.getByText("Squirrel Saver");
        const loginLink = screen.getByRole('link', { name: 'Click here to login.' });
        fireEvent.click(loginLink);
        await waitFor(() => {
            expect(screen.getByText("Welcome back!")).toBeInTheDocument();
        });
        fireEvent.click(appTitle);
        await waitFor(() => {
            expect(screen.getByText("Welcome to Squirrel Saver!")).toBeInTheDocument();
        });
    })

    it.skip('Renders a logout button when a user is logged in.', () => {
        render(<AppBar />);
        // Action to assign user as logged in, working here to get test to pass

        // Check that a button with text logout is on the screen
        const logoutButton = screen.getByRole("button", {name: /Logout/i});
        expect(logoutButton).toBeInTheDocument();
    });
})


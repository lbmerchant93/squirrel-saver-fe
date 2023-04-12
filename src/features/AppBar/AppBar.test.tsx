import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Routes, Route, BrowserRouter, MemoryRouter } from 'react-router-dom';
import { PossibleRoutes } from '../../utils/constants';
import LoginPage from '../../pages/LoginPage/LoginPage';
import LandingPage from '../../pages/LandingPage/LandingPage';
import AppBar from './AppBar';

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
        const routes = (
            <Routes>
              <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
              <Route path={`${PossibleRoutes.LOGIN}`} element={<LoginPage />} />
            </Routes>
        );
        render(
            <MemoryRouter initialEntries={['/']}>
                <AppBar/>
                {routes}
            </MemoryRouter>
        )
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

    it('Renders a login button when a user is not logged in and navigates the user to the LoginPage.', async () => {
        const routes = (
            <Routes>
              <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
              <Route path={`${PossibleRoutes.LOGIN}`} element={<LoginPage />} />
            </Routes>
        );
        render(
            <MemoryRouter initialEntries={['/']}>
                <AppBar/>
                {routes}
            </MemoryRouter>
        )
        // Check that a button with text login is on the screen
        const loginButton = screen.getByRole("button", {name: /Login/i});
        expect(loginButton).toBeInTheDocument();
        fireEvent.click(loginButton);
        // Check the button navigated the user to the LoginPage
        await waitFor(() => {
            expect(screen.getByText("Welcome back!")).toBeInTheDocument();
        });
    });

    it.skip('Renders a logout button when a user is logged in and a login button when a user is not logged in.', async () => {
        const routes = (
            <Routes>
              <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
              <Route path={`${PossibleRoutes.LOGIN}`} element={<LoginPage />} />
            </Routes>
        );
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AppBar/>
                {routes}
            </MemoryRouter>
        )
        // Action to assign user as logged in, working here to get test to pass
        const emailInput = screen.getByTestId('email');
        const passwordInput = screen.getByTestId('password');
        const loginButton = screen.getByRole('button', { name: 'Submit' });
        fireEvent.change(emailInput, {
            target: { value: "test@test.com" },
        });
        fireEvent.change(passwordInput, {
            target: { value: "testing" },
        });
        fireEvent.click(loginButton);
        // Check that a button with text logout is on the screen
        await waitFor(() => {
            const logoutButton = screen.getByRole("button", {name: /Logout/i});
            expect(logoutButton).toBeInTheDocument();
        });
    });
})


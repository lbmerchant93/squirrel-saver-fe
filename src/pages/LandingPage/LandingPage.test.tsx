import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LandingPage from './LandingPage';
import { Routes, Route, BrowserRouter, MemoryRouter } from 'react-router-dom';
import { PossibleRoutes } from '../../utils/constants';
import LoginPage from '../LoginPage/LoginPage';
import CreateAccountPage from '../CreateAccountPage/CreateAccountPage';


describe('Landing Page', () => {
    it('Renders welcome message.', () => {
        render(<BrowserRouter><LandingPage /></BrowserRouter>);
        const welcomeMessage = screen.getByText("Welcome to Squirrel Saver!");
        expect(welcomeMessage).toBeInTheDocument();
    });

    it('Renders Squirrel Saver description.', () => {
        render(<BrowserRouter><LandingPage /></BrowserRouter>);
        const description = screen.getByText("*The app designed to help squirrel away money in order to help build your savings.*");
        expect(description).toBeInTheDocument();
    });

    it('Renders log in directions and link to LoginPage.', () => {
        render(<BrowserRouter><LandingPage /></BrowserRouter>);
        const loginDirections = screen.getByText("Already have an account? Great, welcome back!");
        expect(loginDirections).toBeInTheDocument();

        const loginLink = screen.getByRole('link', { name: 'Click here to login.' });
        expect(loginLink).toBeInTheDocument();
    });

    it('Directs user to the LoginPage on login link click.', async () => {
        const routes = (
            <Routes>
              <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
              <Route path={`${PossibleRoutes.LOGIN}`} element={<LoginPage />} />
            </Routes>
        );
        render(<MemoryRouter>{routes}</MemoryRouter>);
        const loginLink = screen.getByRole('link', { name: 'Click here to login.' });
        fireEvent.click(loginLink);
        await waitFor(() => {
            expect(screen.getByText("LoginPage")).toBeInTheDocument();
        });
    });

    it('Renders create account directions and link to CreateAccountPage.', () => {
        render(<BrowserRouter><LandingPage /></BrowserRouter>);
        const createAccountDirections = screen.getByText("First time here? Awesome, welcome to Squirrel Saver!");
        expect(createAccountDirections).toBeInTheDocument();

        const createAccountLink = screen.getByRole('link', { name: 'Click here to create an account.'});
        expect(createAccountLink).toBeInTheDocument();
    });

    it('Directs user to the CreateAccountPage on create account link click.', async () => {
        const routes = (
            <Routes>
              <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
              <Route path={`${PossibleRoutes.CREATE_ACCOUNT}`} element={<CreateAccountPage />} />
            </Routes>
        );
        render(<MemoryRouter initialEntries={['/']}>{routes}</MemoryRouter>);
        const createAccountLink = screen.getByRole('link', { name: 'Click here to create an account.' });
        fireEvent.click(createAccountLink);
        await waitFor(() => {
            expect(screen.getByText("CreateAccountPage")).toBeInTheDocument();
        });
    });

    it.skip('Renders the HomePage component when the user is logged in', () => {
        render(<BrowserRouter><LandingPage /></BrowserRouter>);
    });
});
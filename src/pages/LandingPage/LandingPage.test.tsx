import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import LandingPage from './LandingPage';
import userEvent from '@testing-library/user-event';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PossibleRoutes } from '../../utils/constants';
import LoginPage from '../LoginPage/LoginPage';


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
        const loginDirections = screen.getByText("Already have an account? Great! Welcome back!");
        expect(loginDirections).toBeInTheDocument();

        const loginLink = screen.getByRole('link', { name: 'Click here to login.' })
        expect(loginLink).toBeInTheDocument();
    });

    it.only('Directs user to the LoginPage on login link click.', async () => {
        const routes = (
            <Routes>
              <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
              <Route path={`${PossibleRoutes.LOGIN}`} element={<LoginPage />} />
            </Routes>
        );
        render(<BrowserRouter>{routes}</BrowserRouter>)
        const loginLink = screen.getByRole('link', { name: 'Click here to login.' })
        // Working here, act shouldn't be used but throws a warning when not used on userEvent
        act(() => {userEvent.click(loginLink)});
        await waitFor(() => {
            expect(screen.getByText("LoginPage")).toBeInTheDocument();
        });
    });

    it.skip('Renders create account directions and link to CreateAccountPage.', () => {
        render(<BrowserRouter><LandingPage /></BrowserRouter>);
        const createAccountDirections = screen.getByText("Is this your first time here? Awesome, welcome to Squirrel Saver!");
        expect(createAccountDirections).toBeInTheDocument();

        const createAccountLink = screen.getByRole('link', { name: 'Click here to create an account.'})
        expect(createAccountLink).toBeInTheDocument();
    });

    it.skip('Directs user to the CreateAccountPage on create account link click.', async () => {
        render(<BrowserRouter><LandingPage /></BrowserRouter>);

        const createAccountLink = screen.getByRole('link', { name: 'Click here to create an account.' })
        // userEvent.click(createAccountLink);
        // await waitFor(() => {
        //     expect(screen.getByText("CreateAccountPage")).toBeInTheDocument();
        // });
    });
});
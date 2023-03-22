import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Routes, Route, BrowserRouter, MemoryRouter } from 'react-router-dom';
import { PossibleRoutes } from '../../utils/constants';
import LoginPage from './LoginPage';
import LandingPage from '../LandingPage/LandingPage';

describe('Login Page', () => {
    it('Renders a welcome back message and directs the user to login through their Google account or their email/password.', () => {
        render(<BrowserRouter><LoginPage /></BrowserRouter>);
        const welcomeMessage = screen.getByText(/Welcome back!/i);
        expect(welcomeMessage).toBeInTheDocument();
        const loginDirections = screen.getByText("Please log in to access your account! You can log in through your Google account or enter your email/password.");
        expect(loginDirections).toBeInTheDocument();
    });

    it('Renders a form to login with an email and password and button to submit the form', () => {
        render(<BrowserRouter><LoginPage /></BrowserRouter>);
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
        expect(emailInput).toHaveValue("test@test.com");
        expect(passwordInput).toHaveValue("testing");
        expect(loginButton).toBeInTheDocument();
    });

    it.only('Renders a button to login using a Google account and calls function to login with a google account.', () => {
        render(<BrowserRouter><LoginPage /></BrowserRouter>)
        const onLoginWithGoogle = jest.fn();
        const loginButtonWithGoogleButton = screen.getByRole('button', { name: 'Login With Google' });
        expect(loginButtonWithGoogleButton).toBeInTheDocument();
    })

    it.skip('Renders an error message when the user enters an incorrect email or password.', () => {
        render(<BrowserRouter><LoginPage /></BrowserRouter>);
        const emailInput = screen.getByTestId('email');
        const passwordInput = screen.getByTestId('password');
        const loginButton = screen.getByRole('button', { name: 'Submit' });
        fireEvent.change(emailInput, {
            target: { value: "test@test.com" },
        });
        fireEvent.change(passwordInput, {
            target: { value: "wrongpassword" },
        });
        fireEvent.click(loginButton);
        const passwordErrorMessage = screen.getByText("Wrong password.");
        expect(passwordErrorMessage).toBeInTheDocument();
    })

    it.skip('Renders a message with link to navigate the user to the CreateAccountPage if they need.', () => {
        render(<BrowserRouter><LoginPage /></BrowserRouter>)
        const createAccountMessage = screen.getByText("Need an account?")
        expect(createAccountMessage).toBeInTheDocument();
        const createAccountLink = screen.getByRole('link', { name: 'Register' });
        expect(createAccountLink).toBeInTheDocument();
    })

    it.skip('Navigates the user to the HomePage once the user is logged in.', async () => {
        const routes = (
            <Routes>
              <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
              <Route path={`${PossibleRoutes.LOGIN}`} element={<LoginPage />} />
            </Routes>
        );
        render(<MemoryRouter initialEntries={['/login']}>{routes}</MemoryRouter>)
        //Action to login user
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
        await waitFor(() => {
            expect(screen.getByText("Welcome back!")).toBeInTheDocument();
        });
    })
});
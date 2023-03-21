import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('Login Page', () => {
    it.only('Renders a welcome back message and directs the user to login through their Google account or their email/password.', () => {
        render(<LoginPage />);
        const welcomeMessage = screen.getByText(/Welcome back!/i);
        expect(welcomeMessage).toBeInTheDocument();
        const loginDirections = screen.getByText("Please log in to access your account! You can log in through your Google account or enter your email/password");
        expect(loginDirections).toBeInTheDocument();
    });

    it.skip('Rends a form to login using an email and password.', () => {
        render(<LoginPage />);
        
    });

    it.skip('Renders a button to login using a Google account.', () => {
        render(<LoginPage/>)
    })

    it.skip('Renders an error message when the user enters an incorrect email or password.', () => {
        render(<LoginPage/>)
    })

    it.skip('Renders a message with link to navigate the user to the CreateAccountPage if they need.', () => {
        render(<LoginPage/>)
    })

    it.skip('Navigates the user to the root URL once the user is logged in.', () => {
        render(<LoginPage/>)
    })
});
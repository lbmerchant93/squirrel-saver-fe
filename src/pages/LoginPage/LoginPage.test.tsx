import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('Login Page', () => {
    it('Renders a welcome back message and directs the user to login through their Google account or their email/password.', () => {
        render(<LoginPage />);
        const welcomeMessage = screen.getByText(/Welcome back!/i);
        expect(welcomeMessage).toBeInTheDocument();
        const loginDirections = screen.getByText("Please log in to access your account! You can log in through your Google account or enter your email/password");
        expect(loginDirections).toBeInTheDocument();
    });
});
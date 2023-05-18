import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('Landing Page', () => {
    const testUser = {
        displayName: "Lucas Merchant",
        email: "test@test.com",
        id: "1",
        isLoggedIn: true,
        setDisplayName: () => {},
        setUserId: () => {}
    };

    it('Renders welcome back message.', () => {
        render(<HomePage user={testUser} />);
        const welcomeMessage = screen.getByText("Welcome back!");
        expect(welcomeMessage).toBeInTheDocument();
    });
});
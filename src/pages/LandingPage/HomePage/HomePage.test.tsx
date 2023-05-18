import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('Landing Page', () => {
    const testUser = {
        displayName: "Lucas Merchant",
        email: "test@test.com",
        id: "1",
        isLoggedIn: true,
        savingsRange: [1, 100],
        numbersDrawn: [88, 17, 39],
        setDisplayName: () => {},
        setUserId: () => {}
    };

    it('Renders welcome back message.', () => {
        render(<HomePage user={testUser} />);
        const welcomeMessage = screen.getByText("Welcome back!");
        expect(welcomeMessage).toBeInTheDocument();
    });

    it.skip('Renders a way for the user to select their target savings range if they don\'t already have one. Will also explain the details of how the app works.', () => {
        render(<HomePage user={testUser} />);
    });

    it.skip('Renders the saving range the user has selected.', () => {
        render(<HomePage user={testUser} />);
    });

    it.skip('Renders the numbers the user has drawn in ascending order.', () => {
        render(<HomePage user={testUser} />);
    });

    it.skip('Renders the numbers the user has drawn in drawing order.', () => {
        render(<HomePage user={testUser} />);
    });

    it.skip('Renders an illustration of how close the user is to their total savings goal.', () => {
        render(<HomePage user={testUser} />);
    });

    it.skip('Renders how many times the user has drawn numbers.', () => {
        render(<HomePage user={testUser} />);
    });

    it.skip('Renders the most previously drawn number.', () => {
        render(<HomePage user={testUser} />);
    });
});
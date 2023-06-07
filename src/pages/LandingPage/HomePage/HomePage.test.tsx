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
        numbersDrawn: [99, 17, 42, 6, 10, 38, 87, 2, 22, 31, 14, 100, 45, 41, 79, 16, 49, 55, 62, 8, 97, 13, 58, 11, 73, 23],
        setDisplayName: () => {},
        setUserId: () => {}
    };

    it('Renders welcome back message.', () => {
        render(<HomePage user={testUser} />);
        const welcomeMessage = screen.getByText("Welcome back!");
        expect(welcomeMessage).toBeInTheDocument();
    });

    it('Renders the saving range the user has selected.', () => {
        render(<HomePage user={testUser} />);
        const savingRange = screen.getByText("1 -> 100");
        expect(savingRange).toBeInTheDocument();
    });

    it('Renders the numbers the user has drawn in ascending order.', () => {
        render(<HomePage user={testUser} />);
        const ascendingOrder = screen.getByText("Ascending order:");
        expect(ascendingOrder).toBeInTheDocument();
    });

    it('Renders the numbers the user has drawn in drawing order.', () => {
        render(<HomePage user={testUser} />);
        const drawnOrder = screen.getByText("Drawn order:");
        expect(drawnOrder).toBeInTheDocument();
    });

    it('Renders an illustration of how close the user is to their total savings goal.', () => {
        render(<HomePage user={testUser} />);
        const progressSection = screen.getByText("Progress towards goal:");
        expect(progressSection).toBeInTheDocument();
    });

    it('Renders how many times the user has drawn numbers.', () => {
        render(<HomePage user={testUser} />);
        const timesDrawn = screen.getByText("Times drawn:");
        expect(timesDrawn).toBeInTheDocument();
    });

    it('Renders the most previously drawn number.', () => {
        render(<HomePage user={testUser} />);
        const lastSaved = screen.getByText("Last saved:");
        expect(lastSaved).toBeInTheDocument();
    });

    it.skip('Renders a way to draw the next number. Number is drawn at random from the numbers the user hasn\'t saved yet.', () => {
        render(<HomePage user={testUser} />);
    });
});
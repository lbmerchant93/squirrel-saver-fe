import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from './HomePage';

describe('Landing Page', () => {
    const testUser = {
        displayName: "Lucas Merchant",
        email: "test@test.com",
        id: "1",
        isLoggedIn: true,
        totalSavings: 5050,
        savingsRange: [1, 100],
        numbersDrawn: [99, 17, 42, 6, 10, 38, 87, 2, 22, 31, 14, 100, 45, 41, 79, 16, 49, 55, 62, 8, 97, 13, 58, 11, 73, 23],
        numbersNotDrawn: [1, 3, 4, 5, 7, 9, 12, 15, 18, 19, 20, 21, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 39, 40, 43, 44, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
        periodId: 1,
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

    it('Renders a way to draw the next number. Initially the save button is disabled and the number is 0.', () => {
        render(<HomePage user={testUser} />);
        const nextNumberSection = screen.getByText("Draw next number:");
        expect(nextNumberSection).toBeInTheDocument();
        const drawnNumber = screen.getByTestId("drawn-number");
        expect(drawnNumber).toHaveTextContent("0");
        expect(drawnNumber).toBeInTheDocument();
        const drawNumberButton = screen.getByRole('button', { name: "Draw" });
        const saveNumberButton = screen.getByRole('button', { name: "Save" });
        expect(drawNumberButton).toBeVisible();
        expect(saveNumberButton).toBeVisible();
        expect(saveNumberButton).toBeDisabled();
    });

    it('The draw button and save button are disabled while drawing a number. A drawing message is displayed.', () => {
        render(<HomePage user={testUser} />);
        const drawnNumber = screen.getByTestId("drawn-number");
        expect(drawnNumber).toHaveTextContent("0");
        expect(drawnNumber).toBeInTheDocument();
        const drawNumberButton = screen.getByRole('button', { name: "Draw" });
        const saveNumberButton = screen.getByRole('button', { name: "Save" });
        expect(drawNumberButton).toBeEnabled();
        fireEvent.click(drawNumberButton);
        expect(drawnNumber).toHaveTextContent("Drawing...");
        expect(drawNumberButton).toBeDisabled();
        expect(saveNumberButton).toBeDisabled();
    });

    it('Number is drawn at random from the numbers the user hasn\'t saved yet. Both draw button and save button are enabled.', async () => {
        render(<HomePage user={testUser} />);
        const drawnNumber = screen.getByTestId("drawn-number");
        expect(drawnNumber).toHaveTextContent("0");
        expect(drawnNumber).toBeInTheDocument();
        const drawNumberButton = screen.getByRole('button', { name: "Draw" });
        const saveNumberButton = screen.getByRole('button', { name: "Save" });
        fireEvent.click(drawNumberButton);

        await waitFor(() => {
            expect(drawNumberButton).toBeEnabled();
        });
        expect(drawNumberButton).toHaveTextContent("Draw Again")
        expect(saveNumberButton).toBeEnabled();
        expect(drawnNumber).not.toHaveTextContent("0");
        expect(drawnNumber).not.toHaveTextContent("Drawing...");
    });
});
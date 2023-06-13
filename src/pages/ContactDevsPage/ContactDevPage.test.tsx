import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactDevsPage from './ContactDevsPage';

describe('ContactDevsPage', () => {
    it('Renders a message for meet dev team, signifying what page the user is on.', () => {
        render(<ContactDevsPage />);
        expect(screen.getByText("Our Dev Team")).toBeInTheDocument();
    });

    it('Renders an image, name, link to LinkedIn, and link to GitHub for Lucas.', () => {
        render(<ContactDevsPage />);
        const lucasName = screen.getByText("Lucas Merchant");
        const lucasTitle = screen.getByText("Software Developer");
        const lucasImage = screen.getByAltText('Lucas Profile Picture');
        const lucasGitHubLink = screen.getByRole('link', {name: 'Github: lbmerchant93'});
        const lucasLinkedInLink = screen.getByRole('link', {name: 'LinkedIn: lbmerchant93'});
        expect(lucasName).toBeInTheDocument();
        expect(lucasTitle).toBeInTheDocument();
        expect(lucasImage).toBeInTheDocument();
        expect(lucasGitHubLink).toBeInTheDocument();
        expect(lucasLinkedInLink).toBeInTheDocument();
    });
});
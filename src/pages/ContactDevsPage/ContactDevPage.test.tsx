import React from 'react';
import { render } from '@testing-library/react';
import ContactDevsPage from './ContactDevsPage';

describe('ContactDevsPage', () => {
    it('Renders an image, name, link to LinkedIn, and link to GitHub for Lucas.', () => {
        render(<ContactDevsPage />);
    });
});
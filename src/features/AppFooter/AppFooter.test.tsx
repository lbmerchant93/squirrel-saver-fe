import React from 'react';
import { render } from '@testing-library/react';
import AppFooter from './AppFooter';

describe('AppFooter', () => {
    it('Renders a link to a contact devs page.', () => {
        render(<AppFooter />);
    });
});
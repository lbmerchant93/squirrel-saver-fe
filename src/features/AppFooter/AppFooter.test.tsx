import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { PossibleRoutes } from '../../utils/constants';
import AppFooter from './AppFooter';
import LandingPage from '../../pages/LandingPage/LandingPage';
import ContactDevsPage from '../../pages/ContactDevsPage/ContactDevsPage';

describe('AppFooter', () => {
    it('Renders a link to a contact devs page.', async () => {
        const routes = (
            <Routes>
              <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
              <Route path={`${PossibleRoutes.CONTACT_DEVS}`} element={<ContactDevsPage />} />
            </Routes>
        );
        render(
            <MemoryRouter initialEntries={['/']}>
                {routes}
                <AppFooter/>
            </MemoryRouter>
        );
        const contactDevsLink = screen.getByRole('link', { name: 'Contact Devs' });
        fireEvent.click(contactDevsLink);
        await waitFor(() => {
            expect(screen.getByText("ContactDevsPage")).toBeInTheDocument();
        });
    });
});
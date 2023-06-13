import React from 'react';
import { Link } from 'react-router-dom';
import { PossibleRoutes } from '../../utils/constants';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Footer, FooterLink } from './AppFooter.styled';

const AppFooter = () => {
  return (
    <Footer>
       <Box display="flex" flexDirection="column" py={3} pl={2}>
            <Typography variant="body1" color="primary.light">Support</Typography>
            <Link to={`${PossibleRoutes.CONTACT_DEVS}`}>
                <FooterLink variant="body1">Contact Devs</FooterLink>
            </Link>
        </Box> 
    </Footer>
  );
};

export default AppFooter;
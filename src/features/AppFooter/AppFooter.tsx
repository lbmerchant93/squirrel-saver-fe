import React from 'react';
import { Link } from 'react-router-dom';
import { PossibleRoutes } from '../../utils/constants';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Footer, FooterLink } from './AppFooter.styled';

const AppFooter = () => {
  return (
    <Footer>
       <Box maxWidth="1232px" width={"100%"} display="flex">
          <Box display="flex" flexDirection="column" alignItems="flex-start" py={3} px={2}>
            <Typography variant="body1" color="primary.light">Support</Typography>
            <Link to={`${PossibleRoutes.CONTACT_DEVS}`}>
                <FooterLink variant="body1">Contact Devs</FooterLink>
            </Link>
          </Box>
        </Box> 
    </Footer>
  );
};

export default AppFooter;
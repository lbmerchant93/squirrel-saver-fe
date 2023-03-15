import React from 'react';
import Typography from '@mui/material/Typography';
import { PossibleRoutes } from '../../utils/constants';
import { Link } from 'react-router-dom';
import {
  LandingPageContainer
} from './LandingPage.styled';

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Typography variant='h2'>Welcome to Squirrel Saver!</Typography>
      <Typography variant='subtitle2'>*The app designed to help squirrel away money in order to help build your savings.*</Typography>
      <Typography variant='h5' my={7}>Already have an account? Great! Welcome back!<br/>Click <Link to={`${PossibleRoutes.LOGIN}`}>here</Link> to login.</Typography>
    </LandingPageContainer>
  )
}

export default LandingPage;
import React from 'react';
import Typography from '@mui/material/Typography';
import {
  LandingPageContainer
} from './LandingPage.styled';

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Typography variant='h2'>Welcome to Squirrel Saver!</Typography>
      <Typography variant='subtitle1'>*This app is designed to help you squirrel away money from each shift you work in order to help build your savings.*</Typography>
    </LandingPageContainer>
  )
}

export default LandingPage;
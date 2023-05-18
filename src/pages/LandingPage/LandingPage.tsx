import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { PossibleRoutes } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../shared/auth-context';
import {
  LandingPageContainer
} from './LandingPage.styled';

const LandingPage = () => {
  const user = useContext(AuthContext);

  if (!user.isLoggedIn) {
    return (
      <LandingPageContainer>
        <Typography variant='h2'>Welcome to Squirrel Saver!</Typography>
        <Typography variant='subtitle2'>*The app designed to help squirrel away money in order to help build your savings.*</Typography>
        <Typography variant='h5' mt={7}>Already have an account? Great, welcome back!</Typography>
        <Typography variant='h5'><Link to={`${PossibleRoutes.LOGIN}`}>Click here to login.</Link></Typography>
        <Typography variant='h5' mt={7}>First time here? Awesome, welcome to Squirrel Saver!</Typography>
        <Typography variant='h5'><Link to={`${PossibleRoutes.CREATE_ACCOUNT}`}>Click here to create an account.</Link></Typography>
      </LandingPageContainer>
    )
  };

  return (
    <div>HomePage</div>
  );
};

export default LandingPage;
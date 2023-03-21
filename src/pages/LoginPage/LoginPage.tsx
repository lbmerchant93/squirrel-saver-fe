import React from 'react';
import Typography from '@mui/material/Typography';
import {
  LoginPageContainer
} from './LoginPage.styled';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Typography variant='h2'>Welcome back!</Typography>
      <Typography variant='h5'>Please log in to access your account! You can log in through your Google account or enter your email/password.</Typography>
    </LoginPageContainer>
  );
};

export default LoginPage;
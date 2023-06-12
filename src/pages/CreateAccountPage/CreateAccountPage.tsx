import React from 'react';
import Typography from '@mui/material/Typography';
import { CreateAccountPageContainer } from './CreateAccountPage.styled';

const CreateAccountPage = () => {
  return (
    <CreateAccountPageContainer>
      <Typography variant='h2'>Welcome!</Typography>
      <Typography variant='h5'>Please fill out the form below to create your account, or use your Google account to create it.</Typography>
    </CreateAccountPageContainer>
  )
}

export default CreateAccountPage
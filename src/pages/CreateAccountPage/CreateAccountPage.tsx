import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { 
  CreateAccountPageContainer,
  CreateAccountForm
 } from './CreateAccountPage.styled';

const CreateAccountPage = () => {
  const [preferredName, setPreferredName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <CreateAccountPageContainer>
      <Typography variant='h2'>Welcome!</Typography>
      <Typography variant='h5'>Please fill out the form below to create your account, or use your Google account to create it.</Typography>
      <Box mt={3} display='flex'>
        <CreateAccountForm >
          <FormLabel component="legend">Create Account Form</FormLabel>
          <Box mt={1}>
            <TextField 
              label="Preferred Name" 
              id="preferred-name" 
              variant="outlined" 
              value={preferredName} 
              error={!!error}
              onChange={(e) => setPreferredName(e.currentTarget.value)} 
              fullWidth={true}
              disabled={isLoading}
              inputProps={{ "data-testid": "preferred-name" }}
            />
          </Box>
          <Box mt={1}>
            <TextField 
              label="Email" 
              id="Email" 
              variant="outlined" 
              value={email} 
              error={!!error}
              onChange={(e) => setEmail(e.currentTarget.value)} 
              fullWidth={true}
              disabled={isLoading}
              inputProps={{ "data-testid": "email" }}
            />
          </Box>
          <Box mt={1}>
            <TextField 
              label="Password" 
              id="Password" 
              variant="outlined" 
              type="password" 
              value={password} 
              error={!!error}
              helperText={error}
              onChange={(e) => setPassword(e.currentTarget.value)} 
              fullWidth={true}
              disabled={isLoading}
              inputProps={{ "data-testid": "password" }}
            />
          </Box>
          <Box mt={1}>
            <LoadingButton type="submit" variant="outlined" color="inherit" loading={isLoading}>Submit</LoadingButton>  
          </Box>
        </CreateAccountForm>
      </Box>
    </CreateAccountPageContainer>
  )
}

export default CreateAccountPage
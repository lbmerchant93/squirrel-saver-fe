import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import {
  LoginPageContainer
} from './LoginPage.styled';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoginPageContainer>
      <Typography variant='h2'>Welcome back!</Typography>
      <Typography variant='h5'>Please log in to access your account! You can log in through your Google account or enter your email/password.</Typography>
      <Box>
        <form>
          <FormLabel component="legend">Login Form</FormLabel>
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
              />
            </Box>
            <Box>
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
              />
            </Box>
        </form>
      </Box>
    </LoginPageContainer>
  );
};

export default LoginPage;
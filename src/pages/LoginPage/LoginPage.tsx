import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import ProviderLoginButton from '../../components/ProviderLoginButton/ProviderLoginButton';
import Divider from '@mui/material/Divider';
import {
  LoginPageContainer,
  LoginForm,
  ProviderLoginButtonContainer
} from './LoginPage.styled';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLogin = (email: string, password: string) => {
    console.log(email, password)
  };
  const loginWithGoogle = () => {
    console.log("login with google")
  };

  return (
    <LoginPageContainer>
      <Typography variant='h2'>Welcome back!</Typography>
      <Typography variant='h5'>Please log in to access your account! You can log in through your Google account or enter your email/password.</Typography>
      <Box mt={3} display='flex' flexDirection='row'>
        <LoginForm>
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
              <LoadingButton variant="outlined" color="inherit" onClick={() => onLogin(email, password)} loading={isLoading}>Submit</LoadingButton>  
            </Box>
        </LoginForm>
        <Divider orientation="vertical" />
        <ProviderLoginButtonContainer>
          <ProviderLoginButton 
            message={"Sign in with Google"} 
            isLoading={isLoading}
            loginWithGoogle={loginWithGoogle}
          />
        </ProviderLoginButtonContainer>
      </Box>
    </LoginPageContainer>
  );
};

export default LoginPage;
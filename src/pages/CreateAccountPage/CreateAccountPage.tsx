import React, { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import ProviderLoginButton from '../../components/ProviderLoginButton/ProviderLoginButton';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../configs/firebase.configs';
import { AuthContext } from '../../shared/auth-context';
import { useNavigate } from 'react-router-dom';
import { PossibleRoutes } from '../../utils/constants';
import { 
  CreateAccountPageContainer,
  CreateAccountForm,
  ProviderLoginButtonContainer,
  LoginLink
 } from './CreateAccountPage.styled';

const CreateAccountPage = () => {
  const [preferredName, setPreferredName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isMobile = useMediaQuery('(max-width: 620px)');
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
        const userLogin = await signInWithPopup(auth, new GoogleAuthProvider());
        user.setUserId(userLogin.user.uid)
        setIsLoading(false)
        navigate(`/`)
    } catch (err: any) {
        setIsLoading(false)
        setError(err.message);
        console.log('error signing in', err.message);
    }
  };

  return (
    <CreateAccountPageContainer>
      <Typography variant='h2'>Welcome!</Typography>
      <Typography variant='h5'>Please fill out the form below to create your account, or use your Google account to create it.</Typography>
      <Box mt={3} display='flex' flexDirection={isMobile ? 'column' : 'row'}>
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
        {isMobile && <Box my={2}><Divider orientation="horizontal"/></Box>}
        {!isMobile && <Box mx={2}><Divider orientation="vertical"/></Box>}
        <ProviderLoginButtonContainer>
          <ProviderLoginButton 
            message={"Sign in with Google"} 
            isLoading={isLoading}
            loginWithGoogle={loginWithGoogle}
          />
        </ProviderLoginButtonContainer>
      </Box>
      <Typography variant="caption" mt={2}>
        Already have an account? <LoginLink to={`${PossibleRoutes.LOGIN}`}>Login</LoginLink>
      </Typography>
    </CreateAccountPageContainer>
  )
};

export default CreateAccountPage;
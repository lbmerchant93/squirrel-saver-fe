import React, { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import ProviderLoginButton from '../../components/ProviderLoginButton/ProviderLoginButton';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../configs/firebase.configs';
import { AuthContext } from '../../shared/auth-context';
import { useNavigate } from 'react-router-dom';
import { PossibleRoutes } from '../../utils/constants';
import GuestLoginButton from '../../components/ProviderLoginButton/GuestLoginButton';
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

  const createAccount = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const createdUser = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(createdUser.user, {displayName: preferredName});
      setIsLoading(false);
      navigate(`/`);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
      console.log(err.message);
    }
  };

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

  const loginAsGuest = async () => {
    setIsLoading(true);
    try {
      const userLogin = await signInWithEmailAndPassword(auth, 'guest@guest.com', 'guestuser');
      user.setUserId(userLogin.user.uid)
      setIsLoading(false)
      navigate(`/`)
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
      console.log(err.message);
    };
  };

  return (
    <CreateAccountPageContainer>
      <Typography variant='h2'>Welcome!</Typography>
      <Typography variant='h5'>Please fill out the form below to create your account, or use your Google account to create it.</Typography>
      <Box mt={3} display='flex' flexDirection={isMobile ? 'column' : 'row'}>
        <CreateAccountForm onSubmit={createAccount}>
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
            <LoadingButton type="submit" variant="outlined" color="inherit" loading={isLoading} disabled={!preferredName.length || !email.length || !password.length}>Submit</LoadingButton>  
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
          <Typography variant="caption" my={3}>OR</Typography>
          <GuestLoginButton
            loginAsGuest={loginAsGuest}
            isLoading={isLoading}
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
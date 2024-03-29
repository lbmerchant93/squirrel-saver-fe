import React, { useState, useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import ProviderLoginButton from '../../components/ProviderLoginButton/ProviderLoginButton';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PossibleRoutes } from '../../utils/constants';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../configs/firebase.configs';
import { AuthContext } from '../../shared/auth-context';
import { useNavigate } from 'react-router-dom';
import GuestLoginButton from '../../components/ProviderLoginButton/GuestLoginButton';
import { useLoginUser } from '../../api/user/user';
import {
  LoginPageContainer,
  LoginForm,
  ProviderLoginButtonContainer,
  CreateAccountLink
} from './LoginPage.styled';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isMobile = useMediaQuery('(max-width: 620px)');
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  const loginUser = useLoginUser();

  const onLoginWithEmailAndPassword = async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    setIsLoading(true);
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      loginUser.mutate({ id: userLogin.user.uid, email: userLogin.user.email, displayName: userLogin.user.displayName }, {
        onError: (err: any) => {
            setError(err.response.errors[0].message || 'Something went wrong, please try again or contact us for help.')
            setIsLoading(false)
            console.log(err)
        },
        onSuccess: (data) => {
            user.setUserId(userLogin.user.uid)
            setIsLoading(false)
            navigate(`/`)
        }
      })
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
      console.log(err.message);
    };
  };

  const loginAsGuest = async () => {
    setIsLoading(true);
    try {
      const userLogin = await signInWithEmailAndPassword(auth, 'guest@guest.com', 'guestuser');
      loginUser.mutate({ id: userLogin.user.uid, email: userLogin.user.email, displayName: userLogin.user.displayName }, {
        onError: (err: any) => {
            setError(err.response.errors[0].message || 'Something went wrong, please try again or contact us for help.')
            setIsLoading(false)
            console.log(err)
        },
        onSuccess: (data) => {
            user.setUserId(userLogin.user.uid)
            setIsLoading(false)
            navigate(`/`)
        }
      })
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
      console.log(err.message);
    };
  };

  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
        const userLogin = await signInWithPopup(auth, new GoogleAuthProvider());
        loginUser.mutate({ id: userLogin.user.uid, email: userLogin.user.email, displayName: userLogin.user.displayName }, {
          onError: (err: any) => {
              setError(err.response.errors[0].message || 'Something went wrong, please try again or contact us for help.')
              setIsLoading(false)
              console.log(err)
          },
          onSuccess: (data) => {
              user.setUserId(userLogin.user.uid)
              setIsLoading(false)
              navigate(`/`)
          }
        })
    } catch (err: any) {
        setIsLoading(false)
        setError(err.message);
        console.log('error signing in', err.message);
    }
  };

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate(`/`)
    }
  }, [navigate, user])

  return (
    <LoginPageContainer>
      <Typography variant='h2'>Welcome back!</Typography>
      <Typography variant='h5'>Please log in to access your account! You can log in through your Google account or enter your email/password.</Typography>
      <Box mt={3} display='flex' flexDirection={isMobile ? 'column' : 'row'}>
        <LoginForm onSubmit={onLoginWithEmailAndPassword}>
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
            <LoadingButton type="submit" variant="outlined" color="inherit" loading={isLoading} disabled={!email.length || !password.length}>Submit</LoadingButton>  
          </Box>
        </LoginForm>
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
        Need an account? <CreateAccountLink to={`${PossibleRoutes.CREATE_ACCOUNT}`}>Register</CreateAccountLink>
      </Typography>
    </LoginPageContainer>
  );
};

export default LoginPage;
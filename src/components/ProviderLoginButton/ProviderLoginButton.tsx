import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GoogleIcon from '../../shared/GoogleIcon';
import LoadingButton from '@mui/lab/LoadingButton';

interface ProviderLoginButtonsProps {
    message: string;
    isLoading: boolean;
    loginWithGoogle: () => void;
}

const ProviderLoginButton: React.FC<ProviderLoginButtonsProps> = (props) => {
    const { message, isLoading, loginWithGoogle } = props;
    
    return (
        <Box>
            <LoadingButton variant="outlined" onClick={() => loginWithGoogle()} color="inherit" loading={isLoading}>
                {!isLoading && <GoogleIcon />}
                <Typography variant="body1" ml={1}>{message}</Typography>
            </LoadingButton>
        </Box>
    )
}

export default ProviderLoginButton;
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';

interface GuestLoginButtonsProps {
    loginAsGuest: () => Promise<void>;
    isLoading: boolean;
}

const GuestLoginButton: React.FC<GuestLoginButtonsProps> = (props) => {
    const { loginAsGuest, isLoading } = props;
    
    return (
        <Box>
            <LoadingButton variant="outlined" onClick={() => loginAsGuest()} color="inherit" loading={isLoading} sx={{width: '251px'}}>
                <Box display="flex" alignItems="center" height="30px">
                    <Typography variant="body1">Sign in as guest</Typography>
                </Box>
            </LoadingButton>
        </Box>
    )
};

export default GuestLoginButton
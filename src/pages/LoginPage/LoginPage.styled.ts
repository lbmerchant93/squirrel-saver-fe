import styled from 'styled-components/macro';
import Box from '@mui/material/Box';

export const LoginPageContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    max-width: min(80ch, 100%);
`;

export const LoginForm = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
`;

export const ProviderLoginButtonContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
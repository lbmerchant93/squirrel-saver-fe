import styled from 'styled-components/macro';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

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
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CreateAccountLink = styled(Link)`
    padding: 3px;
    :hover {
        border-radius: 5px;
        background-color: #e0e0e0;
    }
`;
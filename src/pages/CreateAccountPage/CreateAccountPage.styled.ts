import styled from 'styled-components/macro';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export const CreateAccountPageContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    max-width: min(80ch, 100%);
`;

export const CreateAccountForm = styled.form`
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

export const LoginLink = styled(Link)`
    padding: 3px;
    :hover {
        border-radius: 5px;
        background-color: #e0e0e0;
    }
`;
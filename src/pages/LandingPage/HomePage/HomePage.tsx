import React from 'react';
import { User } from '../../../shared/auth-context';
import Typography from '@mui/material/Typography';
import { HomePageContainer } from './HomePage.styled';

interface HomePageProps {
    user: User;
}

const HomePage: React.FC<HomePageProps> = (props) => {
    const { user } = props;
    
    return (
        <HomePageContainer>
            <Typography variant='h2'>Welcome back!</Typography>
        </HomePageContainer>
    );
};

export default HomePage;
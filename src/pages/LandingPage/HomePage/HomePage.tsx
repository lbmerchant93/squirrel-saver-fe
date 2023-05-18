import React from 'react';
import { User } from '../../../shared/auth-context';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { HomePageContainer } from './HomePage.styled';

interface HomePageProps {
    user: User;
}

const HomePage: React.FC<HomePageProps> = (props) => {
    const { user } = props;
    
    return (
        <HomePageContainer>
            <Typography variant='h2'>Welcome back!</Typography>
            <Box mt={5} display="flex" flexDirection="row" width="100%">
                <Box height={300} width={300} borderRight="1px solid black" display="flex" flexDirection="column" alignItems="center" flexShrink={0}>
                    <Typography variant="body1">Progress towards goal:</Typography>
                    <Box height={200} width={200} border="1px solid black" borderRadius="50%"></Box>
                </Box>
                <Box height={300} flexGrow={1}>
                    <Box borderBottom="1px solid black" height={150} width="100%">
                        <Typography variant="body1">Draw next number:</Typography>
                        <Typography variant="body1">#</Typography>
                        <button>Draw/Again</button>
                        <button>Save</button>
                    </Box>
                    <Box height={150} width="100%">
                        <Typography variant="body1">Savings range:</Typography>
                        <Typography variant="body1">{`1 -> 100`}</Typography>
                        <button>Change Range</button>
                    </Box>
                </Box>
            </Box>
            <Box mt={5} display="flex" flexDirection="row" width="100%" border="1px solid black">
                <Box height={200} width={200} borderRight="1px solid black">
                    <Box height={100} width="100%" borderBottom="1px solid black">Last number saved:</Box>
                    <Box height={100} width="100%">Times drawn:</Box>
                </Box>
                <Box height={200} width={200} borderRight="1px solid black">Numbers in drawn order:</Box>
                <Box height={200} width={200} >Numbers in ascending order:</Box>
            </Box>
        </HomePageContainer>
    );
};

export default HomePage;
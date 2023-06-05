import React from 'react';
import { User } from '../../../shared/auth-context';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { HomePageContainer } from './HomePage.styled';

interface HomePageProps {
    user: User;
}

const HomePage: React.FC<HomePageProps> = (props) => {
    // const { user } = props;
    
    return (
        <HomePageContainer>
            <Typography variant='h2'>Welcome back!</Typography>
            <Box mt={5} display="flex" flexDirection="row" width="100%">
                <Box height={300} width={300} borderRight="1px solid black" display="flex" flexDirection="column" alignItems="center" flexShrink={0} pt={1}>
                    <Typography variant="h6">Progress towards goal:</Typography>
                    <Box height={200} width={200} border="1px solid black" borderRadius="50%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Typography variant="h6">$174 of $5050</Typography>
                        <Typography variant="h6">3%</Typography>
                    </Box>
                </Box>
                <Box height={300} flexGrow={1}>
                    <Box borderBottom="1px solid black" height={150} width="100%" minWidth={300} pt={1} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h6">Draw next number:</Typography>
                        <Typography variant="h6">#</Typography>
                        <Box display="flex" justifyContent="space-evenly" width={250} mt={2}>
                            <Button variant="contained" color="inherit">Draw/Again</Button>
                            <Button variant="contained" color="success">Save</Button>  
                        </Box>
                    </Box>
                    <Box height={150} width="100%" pt={1}>
                        <Typography variant="h6">Savings range:</Typography>
                        <Typography variant="h6">{`1 -> 100`}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box mt={5} display="flex" flexDirection="column" width="100%" border="1px solid black">
                <Box height={100} display="flex" borderBottom="1px solid black">
                    <Box width="100%" borderRight="1px solid black" pt={1}>
                        <Typography variant="h6">Last number saved:</Typography>
                        <Typography variant="h6">10</Typography>
                    </Box>
                    <Box width="100%" pt={1}>
                        <Typography variant="h6">Times drawn:</Typography>
                        <Typography variant="h6">5</Typography>
                    </Box>
                </Box>
                <Box height={150} borderBottom="1px solid black" pt={1}>
                    <Typography variant="h6">Numbers in drawn order:</Typography>
                    <Typography variant="h6">99, 17, 42, 6, 10</Typography>
                </Box>
                <Box height={150} pt={1}>
                    <Typography variant="h6">Numbers in ascending order:</Typography>
                    <Typography variant="h6">6, 10, 17, 42, 99</Typography>
                </Box>
            </Box>
        </HomePageContainer>
    );
};

export default HomePage;
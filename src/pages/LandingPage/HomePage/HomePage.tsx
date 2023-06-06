import React from 'react';
import { User } from '../../../shared/auth-context';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { mockUserData } from '../../../utils/constants';
import { HomePageContainer, DrawnNumbersContainer } from './HomePage.styled';

interface HomePageProps {
    user: User;
}

const HomePage: React.FC<HomePageProps> = (props) => {
    // const { user } = props;

    const totalSaved = mockUserData.numbersDrawn.reduce((num, acc) => {
        return acc + num
    }, 0);

    const summation = (n: number) => {
        let sum = 0;
        for (let i = 0; i < n + 1; i++) {
            sum += i
        };
        return sum;
    };

    const savingsSummation = summation(mockUserData.savingsRange[1]);

    const percentageCompleted = Math.round((totalSaved/savingsSummation) * 100);

    // Use .slice to make a copy of the original array because .sort mutates the original
    const numbersDrawnInAscendingOrder = mockUserData.numbersDrawn.slice().sort((a, b) => a - b).join(", ");
    
    return (
        <HomePageContainer>
            <Typography variant='h2'>Welcome back!</Typography>
            <Box mt={5} display="flex" flexDirection="row" width="100%">
                <Box height={300} width={300} borderRight="1px solid black" display="flex" flexDirection="column" alignItems="center" flexShrink={0} pt={1}>
                    <Typography variant="h6">Progress towards goal:</Typography>
                    <Box height={200} width={200} border="1px solid black" borderRadius="50%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Typography variant="h6">${totalSaved} of ${savingsSummation}</Typography>
                        <Typography variant="h6">{percentageCompleted}%</Typography>
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
                        <Typography variant="h6">{mockUserData.numbersDrawn[mockUserData.numbersDrawn.length - 1]}</Typography>
                    </Box>
                    <Box width="100%" pt={1}>
                        <Typography variant="h6">Times drawn:</Typography>
                        <Typography variant="h6">{mockUserData.numbersDrawn.length}</Typography>
                    </Box>
                </Box>
                <Box display="flex" borderBottom="1px solid black">
                    <Box display="flex" justifyContent="center" width="100%" borderRight="1px solid black" py={1} px={2}>
                        <DrawnNumbersContainer>
                            <Typography variant="h6">Drawn order:</Typography>
                            <Typography variant="h6">{mockUserData.numbersDrawn.join(", ")}</Typography>
                        </DrawnNumbersContainer>
                    </Box>
                    <Box display="flex" justifyContent="center" width="100%" py={1} px={2}>
                        <DrawnNumbersContainer>
                            <Typography variant="h6">Ascending order:</Typography>
                            <Typography variant="h6">{numbersDrawnInAscendingOrder}</Typography>
                        </DrawnNumbersContainer>
                    </Box>
                    
                </Box>
                
            </Box>
        </HomePageContainer>
    );
};

export default HomePage;
import React, { useState } from 'react';
import { User } from '../../../shared/auth-context';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { mockUserData } from '../../../utils/constants';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import { HomePageContainer, DrawnNumbersContainer } from './HomePage.styled';

interface HomePageProps {
    user: User;
}

const HomePage: React.FC<HomePageProps> = (props) => {
    // const { user } = props;
    const isMobile = useMediaQuery('(max-width:580px)');
    const isTablet = useMediaQuery('(max-width:630px)');
    const [nextNumber, setNextNumber] = useState<number>(0);
    const [isDrawingNumber, setIsDrawingNumber] = useState<boolean>(false);

    const drawNumber = () => {
        setIsDrawingNumber(true);
        let index = Math.floor(Math.random() * mockUserData.numbersNotDrawn.length);
        setTimeout(() => {
            setNextNumber(prev => mockUserData.numbersNotDrawn[index]);
            setIsDrawingNumber(false);
        }, 1500);
    };

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
            <Box mt={5} display="flex" justifyContent="space-evenly" flexDirection={isTablet ? "column" : "row"} width="100%">
                <Box height={275} width={isTablet ? "100%" : 300} display="flex" flexDirection="column" alignItems="center" pt={1} flexShrink={0}>
                    <Typography variant="h6" mb={1}>Progress towards goal:</Typography>
                    <Box height={200} width={200} border="1px solid black" borderRadius="50%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Typography variant="h6">${totalSaved} of ${savingsSummation}</Typography>
                        <Typography variant="h6">{percentageCompleted}%</Typography>
                    </Box>
                </Box>
                <Divider orientation={isTablet ? "horizontal" : "vertical"} variant="middle"/>
                <Box height="100%">
                    <Box height="100%" width={isTablet ? "100%" : 300} minWidth={300} pt={1} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h6" mb={4}>Draw next number:</Typography>
                        {isDrawingNumber && <Typography variant="h6" mb={4} >Drawing...</Typography>}
                        {!isDrawingNumber && <Typography variant="h6" mb={4}>{nextNumber}</Typography>}
                        <Box display="flex" justifyContent="space-evenly" width={250}>
                            <Button variant="contained" color="inherit" onClick={drawNumber} disabled={isDrawingNumber}>{nextNumber ? "Draw Again" : "Draw"}</Button>
                            <Button variant="contained" color="success" disabled={isDrawingNumber || nextNumber === 0}>Save</Button>  
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box mt={5} display="flex" flexDirection="column" border="1px solid black">
                <Box display="flex" flexDirection={isMobile ? "column" : "row"} borderBottom="1px solid black">
                    <Box display="flex" justifyContent="center" flexDirection="column" borderRight={isMobile ? "none" : "1px solid black"} borderBottom={isMobile ? "1px solid black" : "none"} width={isMobile ? "auto" : "100%"} py={1} px={2}>
                        <Box minWidth={150}>
                            <Typography variant="h6">Last saved:</Typography>
                            <Typography variant="h6">{mockUserData.numbersDrawn[mockUserData.numbersDrawn.length - 1]}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" flexDirection="column" borderRight={isMobile ? "none" : "1px solid black"} borderBottom={isMobile ? "1px solid black" : "none"} width={isMobile ? "auto" : "100%"} py={1} px={2}>
                        <Box minWidth={150}>
                            <Typography variant="h6">Times drawn:</Typography>
                            <Typography variant="h6">{mockUserData.numbersDrawn.length}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" flexDirection="column" width={isMobile ? "auto" : "100%"} py={1} px={2}>
                        <Box minWidth={150}>
                            <Typography variant="h6">Savings range:</Typography>
                            <Typography variant="h6">{`1 -> 100`}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
                    <Box display="flex" justifyContent="center" borderRight={isMobile ? "none" : "1px solid black"} borderBottom={isMobile ? "1px solid black" : "none"} py={1} px={2}>
                        <DrawnNumbersContainer>
                            <Typography variant="h6">Drawn order:</Typography>
                            <Typography variant="h6">{mockUserData.numbersDrawn.join(", ")}</Typography>
                        </DrawnNumbersContainer>
                    </Box>
                    <Box display="flex" justifyContent="center" py={1} px={2}>
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
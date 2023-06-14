import React, { useContext } from 'react';
import { PossibleRoutes } from '../../utils/constants';
import MUIAppBar from '@mui/material/AppBar';
import { AuthContext } from '../../shared/auth-context';
import { signOut } from 'firebase/auth';
import { auth } from '../../configs/firebase.configs';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import BrownAcorn from '../../shared/BrownAcorn.svg';
import { 
    ToolBar,
    ToolBarContainer,
    TitleLink,
    TitleText
 } from './AppBar.styled';

const AppBar = () => {
    const user = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        navigate(`/`);
    };

    return (
        <MUIAppBar elevation={0} position="sticky" color="inherit">
            <ToolBar disableGutters>
                <ToolBarContainer py={1} px={2}>
                    <TitleLink to={`${PossibleRoutes.ROOT}`}>
                        <img src={BrownAcorn} alt="acorn" height={35} width={35} />
                        <TitleText variant="h1">Squirrel Saver</TitleText>
                        <img src={BrownAcorn} alt="acorn" height={35} width={35} />
                    </TitleLink>
                    {!user.isLoggedIn ? (
                        <Button variant="outlined" onClick={() => navigate(`/login`)}>Login</Button>
                    ) : (
                        <Button variant="outlined" onClick={logout}>Logout</Button>
                    )}
                </ToolBarContainer>
            </ToolBar>
        </MUIAppBar>
    )
}

export default AppBar;
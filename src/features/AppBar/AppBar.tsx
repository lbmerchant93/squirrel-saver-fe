import React from 'react';
import { PossibleRoutes } from '../../utils/constants';
import MUIAppBar from '@mui/material/AppBar';
import { 
    ToolBar,
    ToolBarContainer,
    TitleLink,
    TitleText
 } from './AppBar.styled';

const AppBar = () => {

  return (
    <MUIAppBar elevation={0} position="sticky" color="inherit">
        <ToolBar disableGutters>
            <ToolBarContainer py={1} px={2}>
                <TitleLink to={`${PossibleRoutes.ROOT}`}>
                    <TitleText variant="h1">Squirrel Saver</TitleText>
                </TitleLink>
            </ToolBarContainer>
        </ToolBar>
    </MUIAppBar>
  )
}

export default AppBar;
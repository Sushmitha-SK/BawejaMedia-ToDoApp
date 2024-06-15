import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleInput } from '../redux/taskSlice';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #9395d3; 
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #9395d3; 
    color: #fff; 
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #fff; 
      color:#9395d3; 
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To-Do App
          </Typography>
          <StyledButton onClick={() => dispatch(toggleInput())}>
            Add New Task
          </StyledButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Header;

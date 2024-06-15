import React from 'react';
import Header from './components/Header';
import AddNew from './components/NewTask';
import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import { Box } from '@mui/material';
import styled from 'styled-components';

const Hero = styled(Box)`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://img.freepik.com/free-vector/modern-flowing-blue-wave-banner-white-background_1035-18960.jpg?t=st=1717597411~exp=1717601011~hmac=e92ea9e54997a9cebbb685b378091c4b8edc9ed1f9d3c2159813edabf58648dd&w=1380');
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 4rem;
  text-align: center;

  span {
    font-size: 24px;
    font-weight: 600;
  }
`;

const AppWrapper = styled.div`
  height: 100%;
`;

const App = () => {
  const showInput = useSelector((state) => state.tasks.showInput);
  return (
    <AppWrapper>
      <Header />
      <Hero>
        <Box>
          <span>Manage Tasks Effortlessly</span>
        </Box>
      </Hero>
      {showInput && <AddNew />}
      <TaskList />
    </AppWrapper>
  );
};

export default App;

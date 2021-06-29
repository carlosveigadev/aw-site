import React from 'react';
import { Box } from '@chakra-ui/react';
import LoginButton from '../containers/Login';
import Dashboard from '../containers/Dashboard';
import ThemeChanger from './ThemeChanger';

const Home = () => (
  <Box>
    <LoginButton />
    <Dashboard />
    <ThemeChanger />
  </Box>
);

export default Home;

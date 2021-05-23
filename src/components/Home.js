import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import LoginButton from '../containers/Login';
import Dashboard from '../containers/Dashboard';

const Home = () => (
  <Box>
    <Text>Hello World</Text>
    <LoginButton />
    <Dashboard />
  </Box>
);

export default Home;

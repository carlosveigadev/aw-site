import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import LoginButton from './Login';
import Timer from './Timer';

const Home = () => (
  <Box>
    <Text>Hello World</Text>
    <LoginButton />
    <Timer />
  </Box>
);

export default Home;

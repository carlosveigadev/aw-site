import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';

const Home = () => (
  <>
    <NavBar />
    <Box
      m="4"
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="space-between"
      />
    </Box>
  </>

);

export default Home;

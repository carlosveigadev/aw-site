import { Box } from '@chakra-ui/react';
import LoginButton from '../containers/Login';
import NavBar from './NavBar';
import ThemeChanger from './ThemeChanger';

const Home = () => (
  <>
    <NavBar />
    <Box
      border="1px solid red"
      m="4"
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="space-between"
      >
        <LoginButton />
        <ThemeChanger />
      </Box>
    </Box>
  </>

);

export default Home;

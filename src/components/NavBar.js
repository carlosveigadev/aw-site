import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GiHamburgerMenu } from 'react-icons/gi';
import { useHistory } from 'react-router';
import ThemeChanger from './ThemeChanger';

const NavBar = () => {
  const history = useHistory();
  const goHome = () => {
    history.push('/');
  };

  const goDashboard = () => {
    history.push('/dashboard');
  };
  return (
    <Menu>
      <MenuButton as={Button}>
        <GiHamburgerMenu />
      </MenuButton>
      <MenuList
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <MenuItem onClick={goHome} display="flex" justifyContent="center">Home</MenuItem>
        <MenuItem onClick={goDashboard} display="flex" justifyContent="center">Dashboard</MenuItem>
        <ThemeChanger />
      </MenuList>
    </Menu>
  );
};

export default NavBar;

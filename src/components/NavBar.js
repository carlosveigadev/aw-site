import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useHistory } from 'react-router';

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
      <MenuList>
        <MenuItem onClick={goHome}>Home</MenuItem>
        <MenuItem onClick={goDashboard}>Dashboard</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavBar;

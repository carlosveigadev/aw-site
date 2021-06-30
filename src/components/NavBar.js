/* eslint-disable react/jsx-props-no-spreading */
import {
  Drawer,
  Box,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
  Flex,
} from '@chakra-ui/react';
import { useRef } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-extraneous-dependencies
import { GiHamburgerMenu } from 'react-icons/gi';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import ThemeChanger from './ThemeChanger';

const MenuItem = ({
  children, to = '/', ...rest
}) => (
  <NavLink
    exact
    to={to}
    activeStyle={{
      textDecoration: 'underline',
    }}
  >
    <Text display="inline" {...rest}>
      {children}
    </Text>
  </NavLink>
);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const btnRef = useRef();

  const goHome = () => {
    history.push('/');
  };

  const goDashboard = () => {
    history.push('/dashboard');
  };

  return (
    <>
      <Box>
        <Button
          p="1em"
          ref={btnRef}
          variant="ghost"
          onClick={onOpen}
          display={{ sm: 'flex', xl: 'none' }}
          fontSize={{ sm: '68px' }}
        >
          <GiHamburgerMenu />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody my="4em" display="flex" flexDirection="column">
              <Button variant="ghost" onClick={goHome}>Home</Button>
              <Button variant="ghost" onClick={goDashboard}>Dashboard</Button>
              <ThemeChanger />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Flex
        py="1em"
        display={{ base: 'none', xl: 'flex' }}
        justifyContent="space-around"
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/dashboard">Dashboard</MenuItem>
      </Flex>
    </>
  );
};

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavBar;

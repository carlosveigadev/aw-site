import {
  Drawer,
  Box,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GiHamburgerMenu } from 'react-icons/gi';
import { useHistory } from 'react-router';
import ThemeChanger from './ThemeChanger';

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
  );
};

export default NavBar;

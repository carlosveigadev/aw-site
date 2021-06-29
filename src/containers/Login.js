import PropTypes from 'prop-types';
import { Button, useColorMode } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { login } from '../api-requests';
import { userData } from '../redux/actions';

const LoginButton = ({ userData }) => {
  const onClick = async () => {
    const data = await login();
    userData({ isLoggedIn: true, userCode: data, userInfo: '' });
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={onClick}>Connect</Button>
      <Button onClick={toggleColorMode}>
        {' '}
        Toggle
        {' '}
        {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </>
  );
};

const mapDispatch = {
  userData,
};

LoginButton.propTypes = {
  userData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(LoginButton);

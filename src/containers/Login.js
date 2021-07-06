import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { login } from '../api-requests';
import { userData } from '../redux/actions';

const LoginButton = ({ userData }) => {
  const handleLogin = async () => {
    const data = await login();
    userData({ isLoggedIn: true, userCode: data, userInfo: '' });
  };

  return (
    <>
      <Button onClick={handleLogin}>Connect</Button>
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

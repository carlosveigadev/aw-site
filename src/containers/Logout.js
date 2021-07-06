import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { userData } from '../redux/actions';

const LogoutButton = ({ userData }) => {
  const handleLogout = async () => {
    userData({ isLoggedIn: false, userCode: '', userInfo: '' });
  };

  return (
    <>
      <Button onClick={handleLogout}>Disconnect</Button>
    </>
  );
};

const mapDispatch = {
  userData,
};

LogoutButton.propTypes = {
  userData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(LogoutButton);

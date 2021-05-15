import PropTypes from 'prop-types';
import { Button } from "@chakra-ui/react";
import login from '../api-requests'
import { userData } from '../redux/actions'
import { connect } from 'react-redux';


const LoginButton = ({ userData }) => {
  const onClick = async () => {
    const data = await login();
    userData(data);
  }

  return (
    <>
      <Button onClick={onClick}>Connect</Button>
    </>
  )
}

const mapDispatch = {
  userData,
};

LoginButton.propTypes = {
  userData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(LoginButton);
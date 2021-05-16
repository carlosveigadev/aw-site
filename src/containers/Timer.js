import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { requestLastMine } from '../api-requests';

const Timer = ({ isLoggedIn, userCode }) => {
  if (isLoggedIn) {
    const [timer, setTimer] = useState('');

    useEffect(async () => {
      const data = await requestLastMine(userCode);
      setTimer(data.last_mine);
    }, []);

    return (
      <Box>
        <Text>Próxima mineiração em:</Text>
        <Text>{timer}</Text>
      </Box>
    );
  }

  return (
    <Box>
      <Text>Você precisa se conectar com sua conta de AlienWorlds.</Text>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.userData.isLoggedIn,
  userCode: state.userData.userCode,
});

Timer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userCode: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Timer);

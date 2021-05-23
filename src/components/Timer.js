import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Timer = ({ time }) => (
  <>
    <Text>
      Próxima mineiração em:
      {time}
    </Text>
  </>
);

Timer.propTypes = {
  time: PropTypes.string.isRequired,
};

export default Timer;

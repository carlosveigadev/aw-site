import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const MiningItems = ({ items }) => {
  items.map((ele) => console.log(ele[0]));
  return (
    <>
      <Text>Seus Items são:</Text>
      {items.map((ele) => <Text key={Math.random()}>{ele[0]}</Text>)}
    </>
  );
};

MiningItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default MiningItems;

import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const MiningItems = ({ items }) => (
  <>
    {items.map((ele) => <Text key={Math.random()}>{ele}</Text>)}
  </>
);

MiningItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MiningItems;

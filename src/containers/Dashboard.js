import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  requestLastMine, requestItems, requestItemsData,
} from '../api-requests';
import MiningItems from '../components/MiningItems';
import NavBar from '../components/NavBar';

const Dashboard = ({ isLoggedIn, userCode }) => {
  if (isLoggedIn) {
    const [time, setTime] = useState('');
    console.log(time);
    const [items, setItems] = useState([]);
    const [land, setLand] = useState('');

    useEffect(() => {
      setTimeout(async () => {
        const dataMine = await requestLastMine(userCode);
        const dataBag = await requestItems(userCode);

        dataBag.items.forEach(async (element) => {
          const result = await requestItemsData(element);
          setItems((prevItems) => [...prevItems, [result.name, result.delay]]);
        });
        setTime(dataMine.last_mine);
        setLand(dataMine.current_land);
      }, 1000);
    }, []);

    if (items !== [] && land !== '') {
      return (
        <>
          <NavBar />
          <Box>
            <MiningItems items={items} />
          </Box>
        </>
      );
    }
  }

  return (
    <>
      <NavBar />
      <Box>
        <Text>Você precisa se conectar com sua conta de AlienWorlds.</Text>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.userData.isLoggedIn,
  userCode: state.userData.userCode,
});

Dashboard.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userCode: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Dashboard);

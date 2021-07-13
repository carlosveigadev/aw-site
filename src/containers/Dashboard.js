import {
  Text, Flex, Center,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import LoginButton from './Login';
import LogoutButton from './Logout';
import {
  requestLastMine, requestItems, requestItemsData,
} from '../api-requests';
import NavBar from '../components/NavBar';
import MinerData from '../components/MinerData';

const Dashboard = ({ isLoggedIn, userCode }) => {
  if (isLoggedIn) {
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
        setLand(dataMine.current_land);
      }, 1000);
    }, []);

    if (items !== [] && land !== '') {
      return (
        <>
          <NavBar />
          <Flex
            justifyContent="center"
            flexDirection="column"
          >
            <Center>
              <LogoutButton />
            </Center>
            <Center my="1em">
              <MinerData userCode={userCode} />
            </Center>
          </Flex>
        </>
      );
    }
  }

  return (
    <>
      <NavBar />
      <Flex
        justifyContent="center"
        flexDirection="column"
      >
        <Center>
          <LoginButton />
        </Center>
        <Center my="1em">
          <Text>
            Você precisa se conectar com sua conta de AlienWorlds para
            carregarmos dados relacionados com a sua conta.
          </Text>
        </Center>
      </Flex>
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

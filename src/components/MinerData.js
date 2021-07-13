/* eslint-disable no-underscore-dangle */
import {
  Center,
  Heading,
  useColorMode,
  Text,
  Input,
  Button,
  Flex,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  CircularProgress,
} from '@chakra-ui/react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { requestUserData } from '../api-requests';
import '../assets/css/specificTopMining.css';
import MiningItems from './MiningItems';

const MinerData = ({ userCode }) => {
  const [date, setDate] = useState([new Date(), new Date()]);
  const [registers, setRegisters] = useState('');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const { colorMode } = useColorMode();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    const values = {
      initialDate: date[0].toISOString(),
      finalDate: date[1].toISOString(),
      account: userCode,
    };

    const data = await requestUserData(values);
    setItems(data);
    setLoading(false);
  };

  const resetSearch = () => {
    setItems([]);
  };

  return (
    <>
      {loading ? (
        <Center>
          <CircularProgress isIndeterminate color="purple.300" />
        </Center>
      ) : (
        <div>
          {items.length === 0 ? (
            <>
              <Center>
                <Heading size="xm">Buscar os Top Mineradores da Land</Heading>
              </Center>
              <Center my="1em">
                <form onSubmit={handleSubmit}>
                  <Center>
                    <DateRangePicker
                      required
                      maxDate={new Date()}
                      calendarClassName={colorMode}
                      onChange={setDate}
                      value={date}
                    />
                  </Center>
                  <Flex my="1em">
                    <Text mr="1em" aria-required alignSelf="center">Quantidade de Registros:</Text>
                    <Input
                      width="150px"
                      placeholder="(máximo 100)"
                      value={registers}
                      onChange={(e) => setRegisters(e.target.value)}
                    />
                  </Flex>
                  <Center my="1em">
                    <Button colorScheme="purple" type="submit">Procurar</Button>
                  </Center>
                </form>
              </Center>
            </>
          ) : (
            <>
              <Center>
                <Button colorScheme="purple" onClick={resetSearch}>Nova Busca</Button>
              </Center>
              <Center m="3em">
                <Table variant="striped" colorScheme="blue">
                  <TableCaption>{`Últimas ${items.length} minerações em Kavian 23:6.`}</TableCaption>
                  <Thead>
                    <Tr>
                      <Th textAlign="center">Minerador</Th>
                      <Th textAlign="center">Quantidade total de TLM minerados</Th>
                      <Th textAlign="center">Itens utilizados</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items.map((element) => (
                      <Tr key={`${element.trxId}${Math.random()}`}>
                        <Td textAlign="center">{userCode}</Td>
                        <Td textAlign="center">{element.bounty}</Td>
                        <Td textAlign="center"><MiningItems items={element.bag_items} /></Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Center>
              <Center my="1em">
                <Button colorScheme="purple" onClick={resetSearch}>Nova Busca</Button>
              </Center>
            </>
          )}
        </div>
      )}
    </>
  );
};

MinerData.propTypes = {
  userCode: PropTypes.string.isRequired,
};

export default MinerData;

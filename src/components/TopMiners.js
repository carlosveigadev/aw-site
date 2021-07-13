/* eslint-disable no-underscore-dangle */
import {
  Center,
  Heading,
  Radio,
  RadioGroup,
  Stack,
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
import NavBar from './NavBar';
import { requestTopMiners } from '../api-requests';
// import MiningItems from './MiningItems';
import '../assets/css/specificTopMining.css';

const TopMiners = () => {
  const [date, setDate] = useState([new Date(), new Date()]);
  const [order, setOrder] = useState('1');
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
      order,
      registers,
    };

    const data = await requestTopMiners(values);
    console.log(data);
    setItems(data);
    setLoading(false);
  };

  const resetSearch = () => {
    setItems([]);
  };

  return (
    <>
      <NavBar />
      {' '}
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
                  <Center my="1em">
                    <Text mr="1em">Ordem:</Text>
                    <RadioGroup onChange={setOrder} value={order} colorScheme="purple">
                      <Stack direction="row">
                        <Radio value="1">Crescente</Radio>
                        <Radio value="-1">Decrescente</Radio>
                      </Stack>
                    </RadioGroup>
                  </Center>
                  <Flex>
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
              <Center m="5em">
                <Table variant="striped" colorScheme="blue">
                  <TableCaption>Últimas 100 minerações em Kavian 23:6.</TableCaption>
                  <Thead>
                    <Tr>
                      <Th textAlign="center">Minerador</Th>
                      <Th textAlign="center">Quantidade total de TLM minerados</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items.map((element) => (
                      <Tr key={`${element.trxId}${Math.random()}`}>
                        <Td textAlign="center">{element._id}</Td>
                        <Td textAlign="center">{element.total}</Td>
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
export default TopMiners;

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
import { requestSpecificTopMining } from '../api-requests';
import NavBar from './NavBar';
import MiningItems from './MiningItems';
import '../assets/css/specificTopMining.css';

const SpecificTopMining = () => {
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

    const data = await requestSpecificTopMining(values);
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
                <Heading size="xm">Últimas minerações em Kavian 23:6</Heading>
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
              <Center m="1em">
                <Table variant="striped" colorScheme="blue">
                  <TableCaption>Últimas 100 minerações em Kavian 23:6.</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Minerador</Th>
                      <Th>Quantidade TLM</Th>
                      <Th>Itens utilizados</Th>
                      <Th>Data</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items.map((element) => (
                      <Tr key={`${element.trxId}${Math.random()}`}>
                        <Td>{element.miner}</Td>
                        <Td>{element.bounty}</Td>
                        <Td><MiningItems items={element.bag_items} /></Td>
                        <Td>{element.timestamp}</Td>
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
export default SpecificTopMining;

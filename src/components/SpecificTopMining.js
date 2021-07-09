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
} from '@chakra-ui/react';
// import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { useState } from 'react';
import NavBar from './NavBar';
import '../assets/css/specificTopMining.css';
import { requestSpecificTopMining } from '../api-requests';
import MiningItems from './MiningItems';

const SpecificTopMining = () => {
  const [date, setDate] = useState([new Date(), new Date()]);
  const [order, setOrder] = useState('1');
  const [registers, setRegisters] = useState('');
  const [page, setPage] = useState('');

  const [items, setItems] = useState([]);

  const { colorMode } = useColorMode();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const values = {
      initialDate: date[0].toISOString(),
      finalDate: date[1].toISOString(),
      order,
      registers,
      page,
    };

    const data = await requestSpecificTopMining(values);
    setItems(data);
  };

  const resetSearch = () => {
    setItems([]);
  };

  return (
    <>
      {items.length === 0 ? (
        <>
          <NavBar />
          <Center>
            <Heading size="xm">Últimas mineirações em Kavian 23:6</Heading>
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
              <Flex my="1em" justifyContent="space-between">
                <Text mr="1em" aria-required textAlign="center" alignSelf="center">Nũmero da Página:</Text>
                <Input
                  width="150px"
                  placeholder="(máximo 10)"
                  value={page}
                  onChange={(e) => setPage(e.target.value)}
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
          <NavBar />
          <Center>
            <Button colorScheme="purple" onClick={resetSearch}>New Search</Button>
          </Center>
          <Center m="1em">
            <Table variant="striped" colorScheme="blue">
              <TableCaption>Últimas 100 mineirações em Kavian 23:6.</TableCaption>
              <Thead>
                <Tr>
                  <Th>Mineirador</Th>
                  <Th>Quantidade TLM</Th>
                  <Th>Itens utilizados</Th>
                  <Th>Data</Th>
                </Tr>
              </Thead>
              <Tbody>
                {items.map((element) => (
                  <Tr key={element.trxId}>
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
            <Button colorScheme="purple" onClick={resetSearch}>New Search</Button>
          </Center>
        </>
      )}
    </>
  );
};
export default SpecificTopMining;

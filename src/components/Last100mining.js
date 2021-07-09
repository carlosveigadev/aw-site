import {
  Table, TableCaption, Thead, Tr, Th, Td, Tbody, Center, Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { requestLast100mines } from '../api-requests';
import MiningItems from './MiningItems';
import NavBar from './NavBar';

const Last100Mining = () => {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const newData = await requestLast100mines();
    setItems(newData);
  }, []);

  return (
    <>
      <NavBar />
      <Center>
        <Heading size="xm">Últimas 100 mineirações em Kavian 23:6.</Heading>
      </Center>
      <Center m="1em">
        <Table variant="striped" colorScheme="blue">
          <TableCaption>Últimas 100 mineirações em Kavian 23:6.</TableCaption>
          <Thead>
            <Tr>
              <Th>Mineirador</Th>
              <Th>Quantidade TLM</Th>
              <Th>Itens utilizados</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((element) => (
              <Tr key={element.id}>
                <Td>{element.miner}</Td>
                <Td>{element.bounty}</Td>
                <Td><MiningItems items={element.bag_items} /></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Center>
    </>
  );
};

export default Last100Mining;

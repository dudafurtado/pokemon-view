import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { StarIcon, AddIcon } from '@chakra-ui/icons'

import { listPokemon } from '../../Service/pokemonService';

export default function ListTable () {
  const [data, setData] = useState([])


  async function getPokemon () {
    const response = await listPokemon();
    setData(response.data.results);
    console.log(data)
  }

  useEffect(() => {
    getPokemon();
  }, [])

  return (
    <>
      <TableContainer>
  <Table variant='striped'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Link</Th>
        <Th>Favorite</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map((currentData: any) => (
      <Tr key={currentData.name}>
        <Td>{currentData.name}</Td>
        <Td>
          <Link to={currentData.url}>
            {currentData.url}
          </Link>
        </Td>
        <Td>{currentData.star ? <StarIcon /> : <AddIcon />}</Td>
      </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
    </>
  )
}
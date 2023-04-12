import { Button } from '@chakra-ui/react'

import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './style.css';

export default function Home () {
    return(
        <>
        <article className='Page'>
        <Header />
        <Link to='/list'>
            <Button 
        bg='#190D35' 
        color='#FFF' 
        _hover={{ bg: '#897092cc' }}
        fontSize='20px'
        >
            Aperte aqui para acessar a lista de pokemons
        </Button>
        </Link>
        </article>
        </>
    )
}
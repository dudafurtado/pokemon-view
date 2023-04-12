import { Link } from 'react-router-dom';

import { Button } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import LogoGithub from '../../assets/logo-github.svg'
import LogoLinkedin from '../../assets/logo-linkedin.svg'

import './style.css'

export default function Footer () {
  return (
    <>
    <footer>
      <Link to='/'>
      <Button leftIcon={<ArrowBackIcon />} colorScheme='white' variant='outline'>
        Voltar para Home
      </Button>
      </Link>
            <nav 
            >
            <Link to='https://www.linkedin.com/in/mariaeduardafurtado/'>
            <img className='social-media' 
            src={LogoGithub} alt="Desenho que representa a marca da rede social Github" />
            </Link>
                <Link to='https://github.com/dudafurtado'>
                <img className='social-media' 
                src={LogoLinkedin} alt="Desenho que representa a marca da rede social Linkedin" />
            </Link>
            </nav>
    </footer>
    </>
  )
}
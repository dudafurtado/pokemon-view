import './style.css';

import LogoPokemon from '../../assets/pokemon-logo.svg'
import LogoGithub from '../../assets/logo-github.svg'
import LogoLinkedin from '../../assets/logo-linkedin.svg'

import { Link } from 'react-router-dom';

export default function Header () {
    return(
        <>
        <header>
            <img className='logo-pokemon'
            src={LogoPokemon} alt="Desenho da marca Pokemon com suas palavras em fonte alta" />
            <div
            >
            <Link to='https://www.linkedin.com/in/mariaeduardafurtado/'>
            <img className='social-media' 
            src={LogoGithub} alt="Desenho que representa a marca da rede social Github" />
            </Link>
                <Link to='https://github.com/dudafurtado'>
                <img className='social-media' 
                src={LogoLinkedin} alt="Desenho que representa a marca da rede social Linkedin" />
            </Link>
            </div>
        </header>
        </>
    )
}
import React from 'react';
import Logo from '../../assets/img/logo.png';
import ButtonLink from './components/ButtonLink/index'
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="CharlieFlix logo" className="Logo" />
            </a>

            <ButtonLink href="/" className="ButtonLink">
                Novo vídeo
            </ButtonLink>

            <Button className="ButtonLink" as="a">
                Teste styled components
            </Button>
        </nav>
    );
}

export default Menu;
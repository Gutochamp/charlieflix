import React from 'react';
import Logo from '../../assets/img/logo.png';
import ButtonLink from './components/ButtonLink/index'
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="CharlieFlix logo" className="Logo" />
            </a>

            <ButtonLink className="ButtonLink" as="a" href="/">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;
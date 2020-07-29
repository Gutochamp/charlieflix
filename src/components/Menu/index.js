import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import Button from '../Button'
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="CharlieFlix logo" className="Logo" />
            </Link>

            <Button className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
import React from 'react';
import '../assets/styles/components/Header.scss';
// import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src="../public/images/logo.png" alt="" />
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src="../public/images/logo.png " alt=""/>
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </header>
     );
}

export default Header;
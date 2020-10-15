import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png'
import userIcon from '../assets/static/user-icon.png'
import gravatar from '../utils/gravatar';
const Header = props => {
    const { user } = props;
    const hashUser = Object.keys(user).length > 0;
    return (
        <header className="header">
            <Link to="/" >
                <img className="header__img" src={logo} alt="" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {
                        hashUser ? 
                        <img src={gravatar(user.email)} alt={user.email} />
                        :
                        <img src={userIcon} alt=""/>
                    }
                       
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><Link to="/login">Iniciar Sesión</Link></li>  
                </ul>
            </div>
        </header>
     );
}

const mapStateToProps = state =>{
    return{
        user:state.user,

    };
};

export default connect(mapStateToProps, null)(Header);
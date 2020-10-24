import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions/';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png'
import userIcon from '../assets/static/user-icon.png'


const Header = props => {

    const { user } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = ()=> {
        props.logoutRequest({})
    }


    return (    
        <header className="header">
            <Link to="/" >
                <img className="header__img" src={logo} alt="" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {
                        hasUser ? 
                        <img src={gravatar(user.email)} alt={gravatar(user.email)} />
                        :
                        <img src={userIcon} alt=""/>
                    }
                       
                    <p>Perfil</p>   
                </div>
                <ul>
                    {hasUser ? 
                        <li><a href="/">{user.name}</a></li>
                        :
                        null
                    }
                    {hasUser ? 
                        <li><a href="#logOut" onClick={handleLogout}>Cerrar Sesión</a></li>
                        :
                        <li><Link to="/login">Iniciar Sesión</Link></li>  
                    }
                </ul>
            </div>
        </header>
     );
}

const mapStateToProps = state =>{
    return{
         user: state.user,
    };
};

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
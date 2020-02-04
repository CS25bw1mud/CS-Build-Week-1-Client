import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import '../component-css/Header.css'


const HeaderNav = () => {
    return (
        <nav className="header">
                <NavLink to='/mainview'>Lock Enterprises</NavLink>
                <NavLink to='/register'>Sign Up</NavLink>
                <NavLink to='login'>Login</NavLink>
        </nav>
    )
}

export default HeaderNav;
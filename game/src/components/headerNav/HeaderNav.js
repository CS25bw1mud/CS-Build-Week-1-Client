import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import './HeaderNav.css'


const HeaderNav = () => {
    return (
        <nav className="navheader">
                <NavLink to='/mainview'>Lock Enterprises</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='login'>Login</NavLink>
        </nav>
    )
}

export default HeaderNav;
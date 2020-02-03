import React from 'react';
import {NavLink, Link} from 'react-router-dom'


const HeaderNav = () => {
    return (
        <nav>
            <div>
                <Link to='/'>Game Name</Link> {/* Game Name Goes Here */}
            </div>
        </nav>
    )
}

export default HeaderNav;
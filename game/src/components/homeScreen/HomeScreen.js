import React from 'react'
import {Route} from 'react-router-dom'

function HomeScreen(props) {

    const goToRegister = (e) => {
        e.preventDefault();
        props.history.push('/register')
    }

    const goToLogin = e => {
        e.preventDefault();
        props.history.push('/login')
    }

    return (
        <div>
            <div>
                <h1>LOCK ENTERPRISES</h1>
                <button onClick={goToRegister}>SignUp</button>
                <button onClick={goToLogin}>Login</button>
            </div>
        </div>
    )
}

export default HomeScreen;
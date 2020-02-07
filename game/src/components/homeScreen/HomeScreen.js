import React from 'react'
import './HomeScreen.css';

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
        
            <div class="home-outer">
                <div class="upper">
                    <p class="intro"><em>Lock Enterprises presents...</em></p>
                    <h1>LAMBDA ADVENTURE</h1>
                    <h2>Get ready to learn!<br/>Please choose an option below.</h2>
                </div>
                <div class="buttons">
                    <div class="btn" onClick={goToRegister}><p class="btn-text">Register</p></div>
                    <div class="btn" onClick={goToLogin}><p class="btn-text">Login</p></div>
                </div>
            </div>
        
    )
}

export default HomeScreen;
import React, { useState } from 'react'
import './component-css/Register.css';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const credentials = {
        username: '',
        password: ''
    }

    const [login, setLogin] = useState(credentials)

    const changeHandler = e => {
        e.persist();
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('https://cs25-lock-industry-dev.herokuapp.com/api/login/', login) // login endpoint goes here
        .then(res => {
            localStorage.setItem('Token', res.data.key);
            props.history.push('/mainview'); // whatever route we want to go to
            console.log(' Res' , res)
        }) 
        .catch( res=> {
            console.log("No dice", res);
        }
        )
    };
    return (
        <div className='container'>
            <h1 class="reg-title">Login</h1>
            <form onSubmit={submitHandler}>
                <input type='text' name='username' placeholder="Username" onChange={changeHandler} value={login.username}/>
                <input type='password' name='password' placeholder="Password "onChange={changeHandler} value={login.password}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login
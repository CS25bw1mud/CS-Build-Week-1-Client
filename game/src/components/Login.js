import React, { useState } from 'react'

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
        .post('', login) // login endpoint goes here
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/mainview') // whatever route we want to go to
        }) 
    };
    return (
        <div className='container'>
            <form onSubmit={submitHandler}>
                <input type='text' name='username' onChange={changeHandler} value={login.username}/>
                <input type='password' name='password' onChange={changeHandler} value={login.password}/>
            </form>
        </div>
    )
}

export default Login
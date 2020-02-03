import React, { useState } from 'react'

import axios from 'axios'

const Register = props => {
    const credentials = {
        username = "",
        password = ""
    }

    const [register, setRegister] = useState(credentials)

    const changeHandler = e => {
        e.persist();
        setRegister({
            ...register,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios
        .post('', register) // API register endpoint
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push() // push whereever 
        })
    };
    return (
        <div className='container'>
            <form onSubmit={submitHandler}>
                <input type='text' name='username' onChange={changeHandler} value={register.username}/>
                <input type='password' name='password' onChange={changeHandler} value={register.password}/>
            </form>
        </div>
    )
}
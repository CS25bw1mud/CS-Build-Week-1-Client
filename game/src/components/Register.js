import React, { useState } from 'react'


import axios from 'axios'

const Register = props => {
    const credentials = {
        username: "",
        email: "",
        password1: "",
        password2:  ""
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
        .post('https://cs25-lock-industry-dev.herokuapp.com/api/registration', register) // API register endpoint
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/mainview') // push whereever 
        })
    };
    return (
        <div className='container'>
            <form onSubmit={submitHandler}>
                <input type='text' name='username' placeholder="username" onChange={changeHandler} value={register.username}/>
                <input type='text' name='email' placeholder="email" onChange={changeHandler} value={register.email}/>
                <input type='password' name='password1' placeholder="password1" onChange={changeHandler} value={register.password1}/>
                <input type='password' name='password2' placeholder="password2" onChange={changeHandler} value={register.password2}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register
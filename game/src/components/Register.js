import React, { useState } from 'react'
import './component-css/Register.css';

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
        .post('https://cs25-lock-industry-dev.herokuapp.com/api/registration/', register) // API register endpoint
        .then(res => {
            localStorage.setItem('Token', res.data.key);
            console.log(res.data.payload)
            props.history.push('/login') // push whereever 
        })
        .catch(res => {
            console.log("No dice", res);
        })
    };
    return (
        <div className='container'>
            <h1 class="reg-title">Register</h1>
            <form onSubmit={submitHandler}>
                <input type='text' name='username' placeholder="Username" onChange={changeHandler} value={register.username}/>
                <input type='text' name='email' placeholder="Email" onChange={changeHandler} value={register.email}/>
                <input type='password' name='password1' placeholder="Choose a Password" onChange={changeHandler} value={register.password1}/>
                <input type='password' name='password2' placeholder="Type that Password Again, Please" onChange={changeHandler} value={register.password2}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register
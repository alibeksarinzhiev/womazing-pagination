import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './registerpage.css'
import axios from 'axios';

const RegisterPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const postRegister = (e) => {
        e.preventDefault()
        const newUser = {
            email,
            password
        }
        axios
            .post('http://localhost:3004/user', newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className='form__wrapper'>
            <form onSubmit={postRegister}>
                <h1>Register</h1>
                <TextField value={email} onChange={e => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
                <TextField value={password} onChange={e => setPassword(e.target.value)} style={{ margin: "20px 0" }} id="outlined-basic" label="Password" variant="outlined" type="password" />
                <Button type='submit' variant="contained">Send</Button>
            </form>
        </div>
    );
};

export default RegisterPage;
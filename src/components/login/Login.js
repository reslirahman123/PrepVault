import React, { useContext, useState } from 'react'
import { AuthContext } from './context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("email, pass", email, password)
        if (login(email, password)) {
            navigate('./dashboard')
        } else {
            alert("invalid credetials")
        }

    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div>
                    <label htmlFor='email'>Enter your email</label>
                    <input type='text' value={email} id='email' placeholder='email'
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'>Enter the password</label>
                    <input type='password' id='password' value={password} placeholder='password'
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default Login
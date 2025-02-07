import React, { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { user } = useContext(AuthContext)

    return (
        <nav>
            {user ? (<Link to='/dashboard'>Dashboard</Link>)
                : (<Link to='./'>Login</Link>)}
        </nav>
    )
}

export default Navbar
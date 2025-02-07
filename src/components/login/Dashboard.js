import React, { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () =>{
        logout();
        navigate('/')

    }

  return (
    <div>
        <h1>Welcome {user?.email}</h1>
        <div>
            <button type='button' onClick={handleLogout}>Logout</button>
        </div>
        
    </div>
  )
}

export default Dashboard